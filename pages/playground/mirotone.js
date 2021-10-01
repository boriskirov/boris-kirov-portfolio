import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../components/useDarkMode";
import { lightTheme, darkTheme } from "../../components/theme";
import { GlobalStyles } from "../../components/global";
import Toggle from "../../components/toggle";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

function Mirotone() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <motion.div>
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
              {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
            </header>

            <main className={`${utilStyles.innerWrapper}`}>
              <Link href="/playground">
                <a className={`${utilStyles.backButton}`}>Back</a>
              </Link>

              <div className={`${utilStyles.notReadyWrapper}`}>
                <h1 className={`${utilStyles.heading2XlNotReady}`}>
                  <pre>(·_·)</pre>
                </h1>
                <info dateTime="">
                  This is currently being build, I will share a project story
                  here soon.
                </info>
              </div>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default Mirotone;
