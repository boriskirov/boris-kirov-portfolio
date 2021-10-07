import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/head";
import Link from "next/link";

function Mirotone() {
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

          <header>
            <small>Crafted in Amsterdam ♥️</small>
          </header>

          <main className="innerWrapper">
            <Link href="/playground">
              <a className="backButton">Back</a>
            </Link>

            <div className="notReadyWrapper">
              <h1 className="heading2XlNotReady">
                <pre>(·_·)</pre>
              </h1>
              <info dateTime="">
                This is currently being build, I will share a project story here
                soon.
              </info>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Mirotone;
