import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Modal = ({ show, onClose, children, title, body }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = () => {
    onClose();
  };

  const modalContent = show ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            onClick={handleCloseClick}
            className="footer-button modal-close"
          >
            <Image src="/close.svg" alt="close-button" width={24} height={24} />
          </button>
          {title && <h1 className="heading2Xl">{title}</h1>}
          {body && <p>{body}</p>}
          <div className="modal-input">{children}</div>
        </div>
        <div className="modal-footer">
          <small>powered by Elastic </small>
          <Image
            className="icon"
            src="/elastic.svg"
            alt="Elastic logo"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.body);
  } else {
    return null;
  }
};

export default Modal;
