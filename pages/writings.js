import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/head-data";
import Link from "next/link";
import Header from "../components/header";

function Blog() {
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
            <Link href="/">
              <a className="backButton">Back</a>
            </Link>
            <h1 className="heading2Xl">WRITINGS</h1>

            <div className="contentWrapper">
              <Link href="/writings/the-history-of-the-browser">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">The history of the browser</h3>
                  </div>
                  <small>Article</small>
                </a>
              </Link>

              <Link href="/writings/defining-design-systems">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">Defining design system</h3>
                  </div>
                  <small>Article</small>
                </a>
              </Link>

              <Link href="/writings/great-wall-of-development">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">Wall of development</h3>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/tripscout">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">Working with TripScout</h3>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/nda">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">
                      Implementing design system thinking
                    </h3>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/improve-impatience">
                <a className="mainCard">
                  <div>
                    <h3 className="headingL">Improve Impatience</h3>
                  </div>
                  <small>Article</small>
                </a>
              </Link>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Blog;
