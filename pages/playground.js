import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/theme";
import { GlobalStyles } from "../components/global";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";

import Toggle from "../components/toggle";
import utilStyles from "../styles/utils.module.css";

function Playground() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          <div className={`${utilStyles.mainWrapper}`}>
            <GlobalStyles />
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
              <meta
                name="twitter:title"
                content="Boris Kirov - Product Designer"
              />
              <meta
                name="twitter:description"
                content="Technical designer interested in systems, front-end, open source and collaborative design."
              />
              <meta name="twitter:site" content="https://www.boriskirov.com" />
              <meta name="twitter:creator" content="Boris Kirov" />
              <meta name="twitter:image" content="/favicon.png" />
              <link rel="apple-touch-icon" href="/favicon.png" />
            </Head>

            <header>
              <small>Crafted in Amsterdam ♥️</small>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </header>

            <main className={`${utilStyles.innerWrapper}`}>
              <Link href="/">
                <a className={`${utilStyles.backButton}`}>Back</a>
              </Link>
              <h1 className={`${utilStyles.heading2Xl}`}>PLAYGROUND</h1>

              <div className={`${utilStyles.contentWrapper}`}>
                <a
                  className={`${utilStyles.externalPassage}`}
                  href="/playground/mirotone"
                >
                  <style jsx>{`
                    a {
                      cursor: wait;
                    }
                  `}</style>
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Mirotone</h3>
                  </div>
                  <small>Not ready</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://www.figma.com/community/plugin/943057200269205449/Handoff-notes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Handoff Notes </h3>
                  </div>
                  <small>Plugin</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="/playground/npx-boriskirov"
                  rel="noopener noreferrer"
                >
                  <style jsx>{`
                    a {
                      cursor: e-resize;
                    }
                  `}</style>
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>
                      NPX Boriskirov{" "}
                    </h3>
                  </div>
                  <small>NPM Business Card </small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://fluidigrid.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Fluidigrid </h3>
                  </div>
                  <small>Package</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://www.fluiditype.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Fluiditype </h3>
                  </div>
                  <small>Package</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://www.sketchappsources.com/free-source/3786-emojis-builder-sketch-freebie-resource.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Emoji builder </h3>
                  </div>
                  <small>Sketch library</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://github.com/boriskirov/git-commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Git commands </h3>
                  </div>
                  <small>Helper doc</small>
                </a>

                <a
                  className={`${utilStyles.externalPassage}`}
                  href="https://github.com/boriskirov/figma-commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3 className={`${utilStyles.headingL}`}>Figma commands</h3>
                  </div>
                  <small>Helper doc</small>
                </a>
              </div>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default Playground;
