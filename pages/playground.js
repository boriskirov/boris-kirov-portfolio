import React from "react";

import { motion } from "framer-motion";

import Link from "next/link";
import Header from "../components/header";

function Playground() {
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
        <Head>
          <title>Boris Kirov - Product Designer</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Product designer" />
          <meta property="og:type" content="website" />
          <meta
            name="og:title"
            property="og:title"
            content="Boris Kirov - Product Designer"
          />
          <meta
            name="og:description"
            property="og:description"
            content="Technical designer interested in systems, front-end, open source and collaborative design."
          />
          <meta
            property="og:site_name"
            content="Boris Kirov - Product designer"
          />
          <meta property="og:url" content="https://www.boriskirov.com" />
          <meta property="og:image" content="/favicon.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Boris Kirov - Product Designer" />
          <meta
            name="twitter:description"
            content="Technical designer interested in systems, front-end, open source and collaborative design."
          />
          <meta name="twitter:site" content="https://www.boriskirov.com" />
          <meta name="twitter:creator" content="Boris Kirov" />
          <meta name="twitter:image" content="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>
        <div className="mainWrapper">
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
                  <h3 className="headingL">Mirotone</h3>
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
                    <h3 className="headingL"> Glossary </h3>
                  </div>
                  <small>Methods & Practices</small>
                </a>
              </Link>

              <a
                className="externalPassage"
                href="https://www.figma.com/community/plugin/943057200269205449/Handoff-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3 className="headingL">Handoff Notes </h3>
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
                    <h3 className="headingL"> Toolbox </h3>
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
                  <h3 className="headingL">NPX Boriskirov </h3>
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
                  <h3 className="headingL">Fluidigrid </h3>
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
                  <h3 className="headingL">Fluiditype </h3>
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
                  <h3 className="headingL">Emoji builder </h3>
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
                  <h3 className="headingL">Git commands </h3>
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
                  <h3 className="headingL">Figma commands</h3>
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
