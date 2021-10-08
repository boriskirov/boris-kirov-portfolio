import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/headata";
import Link from "next/link";
import Header from "../components/header";

function Blog() {
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

          <main className="innerWrapper">
            <Link href="/">
              <a className="backButton">Back</a>
            </Link>
            <h1 className="heading2Xl">WRITINGS</h1>

            <div className="contentWrapper">
              <Link href="/writings/the-history-of-the-browser">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">The history of the browser</h6>
                  </div>
                  <small>Article</small>
                </a>
              </Link>

              <Link href="/writings/defining-design-systems">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">Defining design system</h6>
                  </div>
                  <small>Article</small>
                </a>
              </Link>

              <Link href="/writings/great-wall-of-development">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">Wall of development</h6>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/tripscout">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">Working with TripScout</h6>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/nda">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">
                      Implementing design system thinking
                    </h6>
                  </div>
                  <small>Case study</small>
                </a>
              </Link>

              <Link href="/writings/improve-impatience">
                <a className="mainCard">
                  <div>
                    <h6 className="headingL">Improve Impatience</h6>
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
