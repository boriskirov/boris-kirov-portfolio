import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShortcut } from "../lib/use-shortcut";
import FontSwap from "./FontSwitch";
import Modal from "./Modal";
import SearchApp from "./SearchApp";
import Motion from "./Motion";
import Commands from "./Commands";

export default function Header({ mode, onToggle }) {
  const [showModal, setShowModal] = useState(false);

  useShortcut({ alt: true, keyCode: 70 }, () => setShowModal(true));
  useShortcut({ key: "Escape" }, () => setShowModal(false));

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
