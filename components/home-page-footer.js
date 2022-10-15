import React from "react";
import DarkMode from "./theme-switch";
import FontSwap from "./font-switch";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePageFooter = () => (
  <motion.div
    initial={{
      y: 25,
      opacity: 0,
    }}
    animate={{
      y: [50, 1],
      opacity: 1,
    }}
    transition={{ ease: "easeOut", duration: 0.5 }}
  >
    <footer
      style={{
        justifyContent: "space-evenly",
        backgroundColor: "var(--card-color-bg)",
        padding: "12px 8px",
        margin: "40px 24px",
        border: "0",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        border: "2px solid var(--card-color-bg)",
        maxWidth: "498px",
        boxShadow: "0px 0px 16px var(--tag-color-bg)",
        position: "sticky",
        bottom: "32px",
      }}
    >
      <a
        title="About"
        className="footer-button"
        href="./about"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image
          src="/about.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          style={{ width: "24px" }}
        />
      </a>
      <a
        title="Playground"
        href="./playground"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image
          src="/playground.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          style={{ width: "24px" }}
        />
      </a>
      <a
        title="Writings"
        href="./writings"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image
          src="/writings.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          style={{ width: "24px" }}
        />
      </a>
      <a
        title="Talks"
        href="./talks"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image
          src="/talks.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          style={{ width: "24px" }}
        />
      </a>
      <a
        title="Photography"
        href="./photography"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Image
          src="/photography.svg"
          alt="An SVG of an eye"
          width={24}
          height={24}
          style={{ width: "24px" }}
        />
      </a>
      <button
        title="Dark mode"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <DarkMode />
      </button>
      <button
        title="Font swap"
        className="footer-button"
        style={{
          padding: "12px",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--card-color-bg)",
          border: "2px solid var(--card-color-bg)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <FontSwap />
      </button>
    </footer>
  </motion.div>
);

export default HomePageFooter;
