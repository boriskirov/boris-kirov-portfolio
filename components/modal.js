import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

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
      <div className="modal-content">
        <a className="footer-button" href="#" onClick={handleCloseClick}>
          <Image src="/close.svg" alt="close-button" width={24} height={24} />
        </a>
        {title && <h1 className="heading2Xl">{title}</h1>}
        {body && <p>{body}</p>}
        <div>{children}</div>
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

export default Modal;
