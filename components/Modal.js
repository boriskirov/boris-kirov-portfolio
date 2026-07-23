import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const ElasticFooter = () => (
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
);

const Modal = ({
  show,
  onClose,
  children,
  title,
  body,
  titleClassName = "heading-2xl",
  TitleTag = "h1",
  footer = <ElasticFooter />,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser || !show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            onClick={onClose}
            className="footer-button modal-close"
          >
            <Image
              src="/close.svg"
              alt="close-button"
              width={18}
              height={18}
              className="icon"
            />
          </button>
          {title && <TitleTag className={titleClassName}>{title}</TitleTag>}
          {body && <p>{body}</p>}
          <div className="modal-input">{children}</div>
        </div>
        {footer}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
