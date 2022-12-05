import React from "react";
import DarkMode from "./theme-switch";
import FontSwap from "./font-switch";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePageFooter = () => (
  <motion.div
    initial={{
      y: 25,
      opacity: 0,
    }}
    animate={{
      y: [100, 1],
      opacity: 1,
    }}
    transition={{ ease: "easeOut", duration: 0.5 }}
  >
    <footer className="dock-menu">
      <Link href="./about" title="About">
        <div className="footer-button">
          <Image src="/about.svg" alt="About me icon" width={24} height={24} />
        </div>
      </Link>
      <Link href="./playground" title="Playground">
        <div className="footer-button">
          <Image
            src="/playground.svg"
            alt="Playground icon"
            width={24}
            height={24}
          />
        </div>
      </Link>
      <Link href="./writings" title="Writings">
        <div className="footer-button">
          <Image
            src="/writings.svg"
            alt="Writings icons"
            width={24}
            height={24}
          />
        </div>
      </Link>
      <Link href="./talks" title="Talks">
        <div className="footer-button">
          <Image src="/talks.svg" alt="Talks icon" width={24} height={24} />
        </div>
      </Link>
      <Link href="./playground/dashboard" title="Dashboard" type="button">
        <div className="footer-button">
          <Image
            src="/dashboard.svg"
            alt="Dashboard icon"
            width={24}
            height={24}
          />
        </div>
      </Link>
      <button title="Dark mode ⌥+D" className="footer-button">
        <DarkMode />
      </button>
      <button title="Font swap ⌥+S" className="footer-button">
        <FontSwap />
      </button>
    </footer>
  </motion.div>
);

export default HomePageFooter;
