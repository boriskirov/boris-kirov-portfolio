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
    style={{ position: "fixed", bottom: "40px" }}
  >
    <footer
      style={{
        justifyContent: "space-evenly",
        backgroundColor: "var(--card-color-bg)",
        padding: "12px",
        margin: "10% 0px",
        border: "0",
        borderRadius: "60px",
        display: "flex",
        flexDirection: "row",
        border: "2px solid var(--card-color-bg)",
        maxWidth: "498px",
        boxShadow: "0px 0px 16px var(--tag-color-bg)",
      }}
    >
      <Link href="./about">
        <a
          title="About"
          className="footer-button"
          style={{
            padding: "8px",
            borderRadius: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--card-color-bg)",
            border: "2px solid var(--card-color-bg)",
            transition: "all 0.3s ease-in-out",
            margin: "2px",
          }}
        >
          <Image
            src="/about.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./playground">
        <a
          title="Playground"
          className="footer-button"
          style={{
            padding: "8px",
            borderRadius: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--card-color-bg)",
            border: "2px solid var(--card-color-bg)",
            transition: "all 0.3s ease-in-out",
            margin: "2px",
          }}
        >
          <Image
            src="/playground.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./writings">
        <a
          title="Writings"
          className="footer-button"
          style={{
            padding: "8px",
            borderRadius: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--card-color-bg)",
            border: "2px solid var(--card-color-bg)",
            transition: "all 0.3s ease-in-out",
            margin: "2px",
          }}
        >
          <Image
            src="/writings.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./talks">
        <a
          title="Talks"
          className="footer-button"
          style={{
            padding: "8px",
            borderRadius: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--card-color-bg)",
            border: "2px solid var(--card-color-bg)",
            transition: "all 0.3s ease-in-out",
            margin: "2px",
          }}
        >
          <Image
            src="/talks.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <Link href="./photography">
        <a
          title="Photography"
          className="footer-button"
          style={{
            padding: "8px",
            borderRadius: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--card-color-bg)",
            border: "2px solid var(--card-color-bg)",
            transition: "all 0.3s ease-in-out",
            margin: "2px",
          }}
        >
          <Image
            src="/photography.svg"
            alt="An SVG of an eye"
            width={24}
            height={24}
          />
        </a>
      </Link>
      <button
        title="Dark mode"
        className="footer-button"
        style={{
          padding: "8px",
          borderRadius: "60px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
          margin: "2px",
        }}
      >
        <DarkMode />
      </button>
      <button
        title="Font swap"
        className="footer-button"
        style={{
          padding: "8px",
          borderRadius: "60px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
          margin: "2px",
        }}
      >
        <FontSwap />
      </button>
    </footer>
  </motion.div>
);

export default HomePageFooter;
