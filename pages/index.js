import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/head-data";
import Link from "next/link";
import Header from "../components/header";

function Home() {
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
            <h1 className="heading2Xl">Hey, I'm BORIS KIROV</h1>

            <p>
              and I'm getting things done at{" "}
              <Link href="/miro" as="/about">
                <a className="internalPassage">Miro</a>
              </Link>
            </p>

            <div className="contentWrapper">
              <section>
                <ul>
                  <li className="blog">
                    <Link href="/about" as="/about">
                      <a className="internalPassage">About</a>
                    </Link>
                  </li>
                  <li className="blog">
                    <Link href="/playground" as="/playground">
                      <a className="internalPassage">Playground</a>
                    </Link>
                  </li>
                  <li className="blog">
                    <Link href="/writings" as="/writings">
                      <a className="internalPassage">Writings</a>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
