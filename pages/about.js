import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/theme";
import { GlobalStyles } from "../components/global";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Toggle from "../components/toggle";
import utilStyles from "../styles/utils.module.css";

function Blog() {
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
              <meta
                name="description"
                content="Boris Kirov - Product designer"
              />
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
              <h1 className={`${utilStyles.heading2Xl}`}>Здрасти,</h1>

              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <img src="/me.png" />
                  <p>
                    <span className={`${utilStyles.dropCap}`}>M</span> y name is
                    Boris Kirov. I'm a Bulgarian designer living in Amsterdam,
                    The Netherlands. I use technology to express myself and I'm
                    currently building the Miro Design system and Platform
                    experience.
                  </p>
                  <p>
                    Before joining Miro I used to work with different companies
                    like{" "}
                    <a href="https://info.nl/" target="_blank">
                      INFO
                    </a>{" "}
                    &{" "}
                    <a href="https://despark.com/" target="_blank">
                      Despark
                    </a>{" "}
                    and clients like Disney, BNP Paribas, Graydon & Tripscout.
                    In my spare time, I enjoy exploring technology and building
                    tools to empower others to build and progress. I am also
                    fascinated by programs and how they can communicate between
                    eachother and with us. My passion for constant
                    experimentation in the realm of design and experience
                    consistency keeps my busy and always hungry. You can always
                    reach me via{" "}
                    <a href="https://twitter.com/sboriskirov" target="_blank">
                      Twitter
                    </a>{" "}
                    or through booking a session on my{" "}
                    <a
                      href="https://www.adplist.org/mentors/boris-kirov"
                      target="_blank"
                    >
                      ADPList
                    </a>{" "}
                    profile.
                  </p>
                  <p>
                    Leaving time for sports like running, cycling and jump rope
                    is essential and important for my physical and mental
                    health. But the most important one is the time for long
                    walks with our lovely monochromatic Mozilla firefox looking
                    Dory. She is an amazingly smart and incredibly responsive
                    adopted mixed-breed dog.
                  </p>
                  <img src="/dory.png" />
                  <p>
                    Photography also is a passion of mine, with which I keep my
                    creative juices flowing. I am fascinated by film photography
                    and currently I'm also deep into drone photography. You can
                    check some of my flickaronies on my{" "}
                    <a href="https://instagram.com/yng.blds" target="_blank">
                      Instagram
                    </a>
                    . Before I used to collaborate with clients like Tea House
                    Sofia, FITC Amsterdam and others.{" "}
                  </p>
                </section>
                <section>
                  <h3 className={`${utilStyles.headingM}`}>
                    This site works because of
                  </h3>
                  <a
                    className={`${utilStyles.stackCard}`}
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img
                        className={`${utilStyles.stackCardImg}`}
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asapdevelopers.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fnext_js.png&f=1&nofb=1"
                      />
                      <h3 className={`${utilStyles.headingM}`}>Next.js</h3>
                    </div>
                  </a>

                  <a
                    className={`${utilStyles.stackCard}`}
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img
                        className={`${utilStyles.stackCardImg}`}
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fvercel_7966_logo_1591610946_s90wa.png&f=1&nofb=1"
                      />
                      <h3 className={`${utilStyles.headingM}`}>Vercel</h3>
                    </div>
                  </a>

                  <a
                    className={`${utilStyles.stackCard}`}
                    href="https://www.framer.com/motion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img
                        className={`${utilStyles.stackCardImg}`}
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappjoy.org%2Fwp-content%2Fuploads%2F2016%2F09%2FFramer-Framerjs-logo.jpg&f=1&nofb=1"
                      />
                      <h3 className={`${utilStyles.headingM}`}>
                        Framer Motion
                      </h3>
                    </div>
                  </a>
                </section>
              </div>
            </main>
            <Footer />
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default Blog;
