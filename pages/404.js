import React from "react";

import { motion } from "framer-motion";

import Metadata from "../components/metadata";
import Link from "next/link";
import Header from "../components/header";

const Error = () => (
  <motion.div
    initial={{
      y: 5,
      opacity: 0,
    }}
    animate={{
      y: [5, 1],
      opacity: 1,
    }}
    transition={{ ease: "easeOut", duration: 0.5 }}
  >
    <div className="mainWrapper">
      <Metadata title="404 - " />

      <Header />

      <main className="innerWrapper">
        <Link href="/playground">
          <a className="backButton">Back</a>
        </Link>

        <div className="notReadyWrapper">
          <h1 className="heading2XlNotReady">
            <pre>░░░░░▄▄▀▀▀▀▀▀▀▀▀▄▄░░░░░</pre>
            <pre>░░░░█░░░░░░░░░░░░░█░░░░</pre>
            <pre>░░░█░░░░░░░░░░▄▄▄░░█░░░</pre>
            <pre>░░░█░░▄▄▄░░▄░░███░░█░░░</pre>
            <pre>░░░▄█░▄░░░▀▀▀░░░▄░█▄░░░</pre>
            <pre>░░░█░░▀█▀█▀█▀█▀█▀░░█░░░</pre>
            <pre>░░░▄██▄▄▀▀▀▀▀▀▀▄▄██▄░░░</pre>
            <pre>░▄█░█▀▀█▀▀▀█▀▀▀█▀▀█░█▄░</pre>
          </h1>
          <p>
            Sorry, this page does not exists, but you can check my{" "}
            <Link href="/playground" as="/playground">
              <a className="internalPassage">Playground</a>
            </Link>{" "}
          </p>
        </div>
      </main>
    </div>
  </motion.div>
);

export default Error;
