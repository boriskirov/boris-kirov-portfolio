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

function fourOfour() {
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
              <Link href="/">
                <a className={`${utilStyles.backButton}`}>Back</a>
              </Link>
              <div className={`${utilStyles.flex}`}>
                <img
                  className={`${utilStyles.stackCardImg}`}
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fmiro_3781_logo_1598617687_dsfet.png&f=1&nofb=1"
                />
              </div>
              <p>
                Miro is a leading collaborative whiteboarding solution. Where
                distributed teams get work done. Together, online. The work
                that's listed below was done in close collaboration with my
                fellow Mironeers.{" "}
                <a
                  href="https://www.miro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Miro
                </a>
              </p>

              <ul>
                <li>
                  <ul>
                    <h2>Design system</h2>

                    <li className={`${utilStyles.listStyleCircle}`}>
                      Grower and advocate
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Ways of working, contribution models and stream
                      collaboration processes
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Onboarding members
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Collaborate and contribute with production-ready code
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <h2>Accessibility</h2>

                    <li className={`${utilStyles.listStyleCircle}`}>
                      <a
                        href="https://miro.com/accessibility-statement/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Miro Accessibility
                      </a>
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Design improvements based on the
                      <a
                        href="https://www.w3.org/TR/WCAG21/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WCAG 2.1
                      </a>
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Collaborate and contribute with production-ready code
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <h2>Developer Experience</h2>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      <a
                        href="https://developers.miro.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Miro Developers
                      </a>
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      <a
                        href="https://mirotone.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mirotone design system
                      </a>
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Getting started app
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Your apps redesign
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Developers comms template design
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <h2>Application Experience</h2>

                    <li className={`${utilStyles.listStyleCircle}`}>
                      Installation & Authorization logic
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      App submission & reviews
                    </li>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      Enterprise app experience
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <h2>Side projects</h2>
                    <li className={`${utilStyles.listStyleCircle}`}>
                      <a
                        href="https://miroshortcuts.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Miro Shortcuts
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default fourOfour;
