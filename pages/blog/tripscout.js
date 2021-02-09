import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../components/useDarkMode";
import { lightTheme, darkTheme } from "../../components/theme";
import { GlobalStyles } from "../../components/global";
import Toggle from "../../components/toggle";
import { motion } from "framer-motion";

import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import utilStyles from "../../styles/utils.module.css";

function Tripscout() {
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
              <Link href="/blog">
                <a className={`${utilStyles.backButton}`}>Back</a>
              </Link>
              <h1 className={`${utilStyles.heading2Xl}`}>TRIPSCOUT</h1>
              <info dateTime="2018-01-28">Jan 28, 2018</info>

              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <p>
                    <span className={`${utilStyles.dropCap}`}>A</span> while ago
                    me and my teammates at Despark were approached by TripScout
                    to add some new features in their working application.
                    TripScout is a trip application with more than 100,000 users
                    created by exciting people who are eager to travel and learn
                    about new places.
                  </p>
                  <h3 className={`${utilStyles.headingL}`}>Challenge</h3>
                  <p>
                    1. How to introduce new features for creating trips and
                    itinerary maintenance, while keeping the flow smooth and
                    user-centric.{" "}
                  </p>
                  <p>
                    2. How the new features should keep the application visuals
                    consistent.{" "}
                  </p>
                  <h3 className={`${utilStyles.headingL}`}>Process</h3>
                  <p>
                    The product team provided user stories and feedback
                    documentation, which showed that an urgent need for adding
                    new features is important if they want to improve the
                    experience of their application. While having those user
                    stories I was able to rethink the product and apply the
                    features. What came out of it was a sitemap which showed
                    connectivity between all the existing features and the one
                    that were about to be introduced.{" "}
                  </p>
                  <img src="/tripscout-app-1.png" />
                  <blockquote>
                    Adding the user stories as part of the flow and attaching
                    them to specific areas in the flow-map made the document
                    understandable.
                  </blockquote>
                  <img src="/tripscout-app-2.png" />
                  <blockquote>
                    There were two cases for the "Trip profile" existing and not
                    existing case. That's why I presented both flows in
                    different parts of the map so we have the full spectrum of
                    requirements even in the mapping phase.
                  </blockquote>
                  <p>
                    Once me and the product team made a re-evaluation of the
                    documentation. We entered the wireframe process. Having the
                    flow mapping the whole journey before we even start doing
                    layouts made the process super smooth.
                  </p>
                  <img src="/tripscout-app-3.png" />
                  <p>
                    The wireframes were approved fast what was interesting to
                    work on now was the implementation of the visual language.
                    While making the designs consistent to the current visual
                    logic we found out that a real live documentation was
                    needed, due to the choices that were made in the past. We
                    needed clear definitions of components. That type of
                    documentation let the development team to ship features
                    faster and the communication between our teams to be
                    smoother. It was like we spoke the same language.{" "}
                  </p>
                  <h3 className={`${utilStyles.headingL}`}>Conclusion</h3>
                  <p>
                    Every team should create their own documentation by
                    implementing the fundamentals of a systematic language.
                    Using methods from code and the knowledge that I gathered
                    from the Atomic design practices I was able to execute a
                    information documentation which led then to a faster
                    shipment of new features and more time for prototypes. Our
                    first workshop took 14 days, the second one was done for
                    just 6 days. We did not loose time to create new components,
                    using the current one we were able to spend more time on
                    prototyping and testing out our ideas.
                  </p>
                  <img src="/tripscout-app-4.png" />
                  <div className={`${utilStyles.flexWrapper}`}>
                    <img
                      className={`${utilStyles.imgVertical}`}
                      src="/tripscout-app-5.gif"
                    />
                    <img
                      className={`${utilStyles.imgVertical}`}
                      src="/tripscout-app-6.gif"
                    />
                  </div>
                  <blockquote>
                    <h4>Refferal</h4>
                    <p>
                      Boris a fantastic strategist and designer and was highly
                      impactful on the end-to-end design of a critical feature
                      set for our app. He has the ability to quickly understand
                      both the user and the business and create simple and
                      elegant, yet highly-functional designs. He is highly
                      receptive to feedback but not afraid to speak the truth
                      when suggestions defy what is best for the user. On top of
                      all of that, he's generally pleasant, has a great sense of
                      humor, and not afraid of hard work. I'd gladly work with
                      Boris again and recommend him to anyone that needs to
                      solve a complex design problem."
                    </p>
                    <p>
                      {" "}
                      <strong>- TripScout Co-founder | Andy Acs</strong>
                    </p>
                  </blockquote>
                  <a
                    className={`${utilStyles.mainCard}`}
                    href="/blog/defining-design-systems"
                  >
                    <div>
                      <h3 className={`${utilStyles.headingL}`}>
                        Defining Design Systems
                      </h3>
                    </div>
                    <small>Read more</small>
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

export default Tripscout;
