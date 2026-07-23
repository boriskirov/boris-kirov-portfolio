import Image from "next/image";
import { motion } from "framer-motion";
import Commands from "./Commands";

export default function Header({ mode, onToggle }) {
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
              width={18}
              height={18}
              className="icon"
            />
          </motion.div>
        </button>
        <a
          href="/llms.txt"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
          title="For agents only"
        >
          <Image
            src="/robots.svg"
            alt="For agents"
            width={18}
            height={18}
            className="icon"
          />
        </a>
        <Commands />
      </div>
    </header>
  );
}
