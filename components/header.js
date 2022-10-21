import React from "react";
import AmsterdamTime from "../components/current-time";
import Modal from "./modal";
import { useState } from "react";
import SearchApp from "../pages/search";
import Image from "next/image";
import Motion from "./motion";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header>
      <AmsterdamTime />

      <div id="modal-root">
        <Motion>
          <a className="footer-button" onClick={() => setShowModal(true)}>
            {" "}
            <Image
              src="/elastic.svg"
              alt="An SVG of an eye"
              width={24}
              height={24}
            />
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
