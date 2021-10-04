import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../components/useDarkMode";
import { lightTheme, darkTheme } from "../../components/theme";
import { GlobalStyles } from "../../components/global";
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

              <h1 className={`${utilStyles.heading2Xl}`}>GLOSSARY</h1>
              <p>
                This is my personal resource that lists the methods, practices
                and ways of working I follow in design.
              </p>
              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Socratic method
                    </summary>
                    <p>
                      The Socratic method (also known as method of Elenchus,
                      elenctic method, or Socratic debate) is a form of
                      cooperative argumentative dialogue between individuals,
                      based on asking and answering questions to stimulate
                      critical thinking and to draw out ideas and underlying
                      presuppositions.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Human Centered Design
                    </summary>
                    <p>
                      Human-centered design is a creative approach to problem
                      solving. It’s a process that starts with the people you’re
                      designing for and ends with new solutions that are tailor
                      made to suit their needs. Human-centered design is all
                      about building a deep empathy with the people you’re
                      designing for; generating tons of ideas; building a bunch
                      of prototypes; sharing what you’ve made with the people
                      you’re designing for; and eventually putting your
                      innovative new solution out in the world.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      System Thinking
                    </summary>
                    <p>
                      Systems thinking is a holistic approach to analysis that
                      focuses on the way that a system's constituent parts
                      interrelate and how systems work over time and within the
                      context of larger systems. The systems thinking approach
                      contrasts with traditional analysis, which studies systems
                      by breaking them down into their separate elements.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Bootstrapping
                    </summary>
                    <p>
                      Bootstrapping is a term for moving ahead without external
                      help. It is based on the 19th century metaphor for a
                      impossible task: "to pull yourself up by your bootstraps."
                      Despite being based on an analogy for the impossible,
                      bootstrapping is considered a useful technique in several
                      areas.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Feedback loop
                    </summary>
                    <p>
                      A system that allows the results of your actions to be
                      measured. It is often viewed as a repeated process of
                      strategy change followed by measurement of results that
                      ultimately leads to a fully optimized strategy.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Analytical thinking
                    </summary>
                    <p>
                      Analytical thinking is the ability to tackle complicated
                      issues by evaluating information you’ve gathered and
                      organized. Analytical thinkers can detect patterns between
                      datasets that often lead to creative solutions.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Nudge Theory
                    </summary>
                    <p>
                      The idea that subtle suggestions, choices and positive
                      reinforcement often achieve more influence than commands,
                      rules and punishment. It has implications for government,
                      education, marketing, leadership and any other domain that
                      relies on social influence.
                    </p>
                  </details>

                  <details className={`${utilStyles.dicCard}`}>
                    <summary
                      aria-haspopup="true"
                      className={`${utilStyles.headingM}`}
                    >
                      Path of least resistance
                    </summary>
                    <p>
                      Path of least resistance is the easiest path to a goal.
                      This sounds like an obvious choice but can be problematic
                      when your goal is narrow such that you miss the bigger
                      picture by doing things the easy way. The following are
                      illustrative examples of the path of least resistance.
                    </p>
                  </details>
                </section>
              </div>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default Mirotone;
