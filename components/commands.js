import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { useCallback } from "react";

function Commands() {
  const Modal = ({ show, onClose, children, title, body }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "2000",
        }}
      >
        <Shorcut />
        <div className="modal-content">
          <div className="modal-body">
            <a href="#" onClick={handleCloseClick} className="footer-button">
              <Image
                src="/close.svg"
                alt="close-button"
                width={24}
                height={24}
              />
            </a>
            {title && <h3 className="headingM"> {title}</h3>}
            {body && <p>{body}</p>}
            <div className="modal-input">{children}</div>
          </div>
        </div>
      </div>
    ) : null;

    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };

  const [showCommandsModal, setShowCommandModal] = useState(false);

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 191) {
        console.log(event.key, event.keyCode);
        setShowCommandModal(true);
      }
      if (event.key === "Escape") {
        setShowCommandModal(false);
      }
    }, []);

    useEffect(() => {
      // attach the event listener
      document.addEventListener("keydown", handleKeyPress);

      // remove the event listener
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);
  }

  return (
    <div className="flex">
      <Shorcut />
      <div id="modal-root">
        <a
          title="Commands (⌥ + /)"
          className="footer-button"
          onClick={() => setShowCommandModal(true)}
        >
          <Image
            src="/commands.svg"
            alt="Commands icon"
            width={24}
            height={24}
          />
        </a>

        <Modal
          onClose={() => setShowCommandModal(false)}
          show={showCommandsModal}
          title="Commands"
          body="List of commands that allow you to customise the experience on my personal space. You can also open a global search to look for specific things."
        >
          <hr />
          <table width="100%">
            <tbody>
              <tr>
                <td width="326" height="56">
                  <p>Action</p>
                </td>
                <td width="326" height="56" align="right">
                  <p>Shortcut</p>
                </td>
              </tr>
              <tr>
                <td width="326" height="56">
                  <p>Change theme</p>
                </td>
                <td width="225" align="right">
                  <p>
                    <kbd className="tag shortcut">⌥ + d</kbd>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="326" height="56">
                  <p>Change fonts</p>
                </td>
                <td width="225" align="right">
                  <p>
                    <kbd className="tag shortcut">⌥ + s</kbd>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="326" height="56">
                  <p>Search for content</p>
                </td>
                <td width="225" align="right">
                  <p>
                    <kbd className="tag shortcut">⌥ + f</kbd>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="326" height="56">
                  <p>Open commands panel</p>
                </td>
                <td width="225" align="right">
                  <p>
                    <kbd className="tag shortcut">⌥ + /</kbd>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    </div>
  );
}

export default Commands;
