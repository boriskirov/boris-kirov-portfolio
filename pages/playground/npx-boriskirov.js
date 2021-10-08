import React from "react";

import { motion } from "framer-motion";

import HeadData from "../../components/headata";
import Link from "next/link";
import Header from "../../components/header";

function Mirotone() {
  return (
    <>
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
          <HeadData />
          <Header />

          <header>
            <small>Crafted in Amsterdam ♥️</small>
          </header>

          <main className="innerWrapper">
            <Link href="/playground">
              <a className="backButton">Back</a>
            </Link>

            <h1 className="heading2Xl">NPM CARD</h1>
            <info dateTime="2020-12-09">Dec 09, 2020</info>
            <div className="contentWrapper">
              <section>
                <img src="/npx-boriskirov.gif" />
                <blockquote>
                  Run <code>npx boriskirov</code> in your terminal.
                </blockquote>
                <p>
                  {" "}
                  Check the repo for more details.{" "}
                  <a
                    href="https://github.com/boriskirov/boriskirov"
                    target="_blank"
                  >
                    Github repo
                  </a>
                </p>
              </section>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Mirotone;
