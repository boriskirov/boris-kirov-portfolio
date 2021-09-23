import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/theme";
import { GlobalStyles } from "../components/global";
import Toggle from "../components/toggle";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";

import utilStyles from "../styles/utils.module.css";

function Home() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.15 }}
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
              <meta property="og:url" content="https://www.boriskirov.cc" />
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
              <meta name="twitter:site" content="https://www.boriskirov.cc" />
              <meta name="twitter:creator" content="Boris Kirov" />
              <meta name="twitter:image" content="/favicon.png" />
              <link rel="apple-touch-icon" href="/favicon.png" />
            </Head>

            <header>
              <small>Crafted in Amsterdam ♥️</small>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </header>

            <main className={`${utilStyles.innerWrapper}`}>
              <h1 className={`${utilStyles.heading2Xl}`}>
                Hey, I'm BORIS KIROV
              </h1>

              <p>
                and I'm getting things done at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://miro.com/index/"
                >
                  Miro
                </a>
              </p>

              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <ul>
                    <li className="blog">
                      <Link href="/about" as="/about">
                        <a className={`${utilStyles.internalPassage}`}>About</a>
                      </Link>
                    </li>
                    <li className="blog">
                      <Link href="/playground" as="/playground">
                        <a className={`${utilStyles.internalPassage}`}>
                          Playground
                        </a>
                      </Link>
                    </li>
                    <li className="blog">
                      <Link href="/blog" as="/blog">
                        <a className={`${utilStyles.internalPassage}`}>
                          Writings
                        </a>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default Home;
