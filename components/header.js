import React from "react";
import AmsterdamTime from "../components/current-time";
import Modal from "./modal";
import SearchApp from "../pages/search";
import Image from "next/image";
import Motion from "./motion";
import { useCallback, useState, useEffect } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      if (event.ctrlKey === true && event.key === "f") {
        setShowModal(true);
        // console.log(event.altKey, event.key, event.keyCode);
      }
      if (event.key === "Escape") {
        setShowModal(false);
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
    <header>
      <AmsterdamTime />

      <Shorcut />

      <div id="modal-root">
        <Motion>
          <a className="footer-button" onClick={() => setShowModal(true)}>
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </a>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title="SEARCH"
            body="      
            Looking for something I've done in the past, just enter the keyword in
            the search box."
          >
            <SearchApp />
          </Modal>
        </Motion>
      </div>
    </header>
  );
}
