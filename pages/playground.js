import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/headata";
import Link from "next/link";
import Header from "../components/header";

function Playground() {
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
            <h1 className="heading2Xl">PLAYGROUND</h1>

            <div className="contentWrapper">
              <a
                className="externalPassage"
                href="https://www.mirotone.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Mirotone</h6>
                </div>
                <small>Package</small>
              </a>

              <Link
                href="/playground/my-glossary"
                rel="noopener noreferrer"
                as="/playground/my-glossary"
              >
                <a className="externalPassage">
                  <style jsx>{`
                    a {
                      cursor: e-resize;
                    }
                  `}</style>
                  <div>
                    <h6 className="headingL"> Glossary </h6>
                  </div>
                  <small>Methods & Practices</small>
                </a>
              </Link>

              <a
                className="externalPassage"
                href="https://www.polywork.com/boriskirov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Changelog</h6>
                </div>
                <small>Tracker</small>
              </a>

              <a
                className="externalPassage"
                href="https://www.figma.com/community/plugin/943057200269205449/Handoff-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Handoff Notes </h6>
                </div>
                <small>Figma plugin</small>
              </a>

              <Link
                href="/playground/my-stack"
                rel="noopener noreferrer"
                as="/playground/my-stack"
              >
                <a className="externalPassage">
                  <style jsx>{`
                    a {
                      cursor: e-resize;
                    }
                  `}</style>
                  <div>
                    <h6 className="headingL"> Toolbox </h6>
                  </div>
                  <small>Tools & Software</small>
                </a>
              </Link>

              <a
                className="externalPassage"
                href="/playground/npx-boriskirov"
                rel="noopener noreferrer"
              >
                <style jsx>{`
                  a {
                    cursor: e-resize;
                  }
                `}</style>
                <div>
                  <h6 className="headingL">NPX Boriskirov </h6>
                </div>
                <small>NPM Business Card </small>
              </a>

              <a
                className="externalPassage"
                href="https://fluidigrid.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Fluidigrid </h6>
                </div>
                <small>Package</small>
              </a>

              <a
                className="externalPassage"
                href="https://www.fluiditype.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Fluiditype </h6>
                </div>
                <small>Package</small>
              </a>

              <a
                className="externalPassage"
                href="https://www.sketchappsources.com/free-source/3786-emojis-builder-sketch-freebie-resource.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Emoji builder </h6>
                </div>
                <small>Sketch library</small>
              </a>

              <a
                className="externalPassage"
                href="https://github.com/boriskirov/git-commands"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Git commands </h6>
                </div>
                <small>Helper doc</small>
              </a>

              <a
                className="externalPassage"
                href="https://github.com/boriskirov/figma-commands"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h6 className="headingL">Figma commands</h6>
                </div>
                <small>Helper doc</small>
              </a>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Playground;
