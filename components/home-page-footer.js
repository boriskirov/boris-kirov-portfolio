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
    style={{ position: "fixed", bottom: "10px" }}
  >
    <footer className="dock-menu">
      <Link href="./about">
        <a title="About" className="footer-button">
          <Image
            src="/about.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./playground">
        <a title="Playground" className="footer-button">
          <Image
            src="/playground.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./writings">
        <a title="Writings" className="footer-button">
          <Image
            src="/writings.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./talks">
        <a title="Talks" className="footer-button">
          <Image
            src="/talks.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./photography">
        <a title="Photography" className="footer-button" type="button">
          <Image
            src="/photography.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <button title="Dark mode" className="footer-button">
        <DarkMode />
      </button>
      <button title="Font swap" className="footer-button">
        <FontSwap />
      </button>
    </footer>
  </motion.div>
);

export default HomePageFooter;
