import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
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
            <Link
              href="#"
              onClick={handleCloseClick}
              className="footer-button"
              legacyBehavior>

              <Image
                src="/close.svg"
                alt="close-button"
                width={24}
                height={24}
              />

            </Link>
            {title && <h1 className="heading2Xl">{title}</h1>}
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
                  <small>Action</small>
                </td>
                <td width="326" height="56">
                  <small>Shortcut</small>
                </td>
              </tr>
              <tr>
                <td width="326">Change theme</td>
                <td width="225">
                  <small>
                    <kbd className="tag shortcut">⌥ + d</kbd>
                  </small>
                </td>
              </tr>
              <tr>
                <td width="326">Change fonts</td>
                <td width="225">
                  <small>
                    <kbd className="tag shortcut">⌥ + s</kbd>
                  </small>
                </td>
              </tr>
              <tr>
                <td width="326">Search for content through all pages</td>
                <td width="225">
                  <small>
                    <kbd className="tag shortcut">⌥ + f</kbd>
                  </small>
                </td>
              </tr>
              <tr>
                <td width="326">Open commands panel</td>
                <td width="225">
                  <small>
                    <kbd className="tag shortcut">⌥ + /</kbd>
                  </small>
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
