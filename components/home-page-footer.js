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
      <a href="./about" title="About" className="footer-button" legacyBehavior>
        <Image src="/about.svg" alt="An SVG of an eye" width={24} height={24} />
      </a>
      <a
        href="./playground"
        title="Playground"
        className="footer-button"
        legacyBehavior
      >
        <Image
          src="/playground.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
        />
      </a>
      <a
        href="./writings"
        title="Writings"
        className="footer-button"
        legacyBehavior
      >
        <Image
          src="/writings.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
        />
      </a>
      <a href="./talks" title="Talks" className="footer-button" legacyBehavior>
        <Image src="/talks.svg" alt="An SVG of an eye" width={24} height={24} />
      </a>
      <a
        href="./photography"
        title="Photography"
        className="footer-button"
        type="button"
        legacyBehavior
      >
        <Image
          src="/photography.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
        />
      </a>
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
