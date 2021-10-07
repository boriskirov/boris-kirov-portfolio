import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/head-data";
import Link from "next/link";
import Header from "../components/header";

function fourOfour() {
  return (
    <>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: [25, 1],
          opacity: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="mainWrapper">
          <HeadData />

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
              <info>
                Sorry, this page does not exists, but you can check my{" "}
                <Link href="/playground" as="/playground">
                  <a className="internalPassage">Playground</a>
                </Link>{" "}
                🕹
              </info>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default fourOfour;
