import FontSwap from "./font-switch";
import Modal from "./modal";
import SearchApp from "../pages/api/search";
import Image from "next/image";
import Motion from "./motion";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Commands from "./commands";

export default function Header({ mode, onToggle }) {
  const [showModal, setShowModal] = useState(false);

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 70) {
        setShowModal(true);
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
      <div className="flex">
        <button onClick={onToggle} className="footer-button" title="Agent mode">
          <motion.div
            key={mode}
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={mode === "portfolio" ? "/chat.svg" : "/web.svg"}
              alt={mode === "portfolio" ? "Chat mode" : "Web mode"}
              width={24}
              height={24}
            />
          </motion.div>
        </button>
        <button type="button" title="Font swap ⌥+S" className="footer-button">
          <FontSwap />
        </button>
        <Shorcut />
        <Commands />
        <Motion>
          <button
            type="button"
            className="footer-button"
            title="Search with ⌥ + F"
            onClick={() => setShowModal(true)}
          >
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </button>

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
