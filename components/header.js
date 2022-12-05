import React from "react";
import AmsterdamTime from "../components/current-time";
import Modal from "./modal";
import SearchApp from "../pages/api/search";
import Image from "next/image";
import Motion from "./motion";
import { useCallback, useState, useEffect } from "react";

import { log } from "next-axiom";
import Commands from "./commands";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 70) {
        setShowModal(true);
        // console.log(event.altKey, event.key, event.keyCode);
        log.debug(event.altKey, event.keyCode);
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
      <div className="flex">
        <Shorcut />
        <Commands />

        <div id="modal-root">
          <Motion>
            <a
              className="footer-button"
              title="Search with ⌥ + F"
              onClick={() => setShowModal(true)}
            >
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
      </div>
    </header>
  );
}
