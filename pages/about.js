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
              <h1 className={`${utilStyles.heading2Xl}`}>Здрасти,</h1>

              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <img src="/me.png" />
                  <p>
                    <span className={`${utilStyles.dropCap}`}>M</span> y name is
                    Boris Kirov. I'm a Bulgarian designer living in Amsterdam,
                    The Netherlands. I use technology to express myself and I'm
                    currently building the Platform experience for Miro.
                  </p>
                  <p>
                    Before joining Miro I used to work with different companies
                    like INFO & Despark and clients like Disney, BNP Paribas,
                    Graydon and others. In my spare time, I enjoy exploring
                    technology and building tools to empower others to build and
                    progress. That's how Fluiditype, Mirotone & Fluidigrid came
                    to live. I am also fascinated by programs and how they can
                    communicate between eachother and with us. My passion for
                    constant experimentation in the realm of design and
                    experience consistency keeps my busy and always hungry.
                  </p>
                  <p>
                    Leaving time for sports like running, cycling and jump rope
                    is essential and important for me from physical and mental
                    health point of view. But the most important one is the time
                    for long walks with our lovely Dory. She is an amazingly
                    smart and incredibly responsive adopted mixed-breed dog.
                  </p>
                  <img src="/dory.png" />
                  <p>
                    Photography also is a passion of mine, with which I keep my
                    creative juices flowing. I am fascinated by film photography
                    and all the magic which is hidden behind it. Currently I'm
                    into drone photography, you can check some of my
                    flickaronies on my Instagram. Before I used to collaborate
                    with clients like Tea House Sofia, FITC Amsterdam and
                    others.{" "}
                  </p>
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
