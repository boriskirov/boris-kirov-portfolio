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

function GreatWall() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
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
              <Link href="/writings">
                <a className={`${utilStyles.backButton}`}>Back</a>
              </Link>
              <h1 className={`${utilStyles.heading2Xl}`}>
                GREAT WALL OF DEVELOPMENT
              </h1>
              <info dateTime="2018-07-24">Jul 24, 2019</info>

              <div className={`${utilStyles.contentWrapper}`}>
                <section>
                  <img src="/wall-of-development-app-1.png" />
                  <p>
                    <span className={`${utilStyles.dropCap}`}>T</span> his is
                    not an article about “Should designers code?” neither about
                    designer titles nor about what UI/UX stands for. However,
                    there is a problem out there with so many titles and
                    misconceptions. They create tension, making everything even
                    more complex especially for people who are not involved in
                    the production process. At the end, of course, it all goes
                    to one pool.
                  </p>
                  <blockquote>
                    What type of knowledge should production-oriented designers
                    possess in order to be a vital part of every product team?
                  </blockquote>
                  <h3 className={`${utilStyles.headingL}`}>
                    Frameworks as a ladder to the top of the wall
                  </h3>
                  <p>
                    The first step of every project would be to learn the
                    frameworks and technologies that are used. This is a good
                    stepping stone for you as a Product-oriented designer, so
                    you know how and where to focus your skillset. Frameworks
                    are one of the best things that ever happened to designers.
                    I don’t believe that being constrained by a framework, ruins
                    your creative or design process. It is way more challenging
                    and interesting when you have the constraints, you have to
                    find your way with and around them, in order to come up with
                    a solution. This is the real production design here. The end
                    result is so rewarding, knowing you connected all the dots.
                  </p>
                  <p>
                    I got triggered to share some insights around design and
                    “The Great Wall of Development”, because of what Brad Frost
                    shared around alerts in his recent{" "}
                    <a href="https://bradfrost.com/writings/post/frontend-design-react-and-a-bridge-over-the-great-divide/">
                      blog post
                    </a>
                    . I will share examples around how we handled some alert
                    changes. We used this{" "}
                    <a href="igorprado.com/react-notification-system/">
                      libraryreact-notification-system
                    </a>
                    . Due to the fact that most of the developers are Javascript
                    oriented and this is a common and normal thing, the
                    usability and functionalities of that important feature were
                    left aside. It was working and everything was fine, but
                    there were a couple of problems:
                  </p>
                  <ul>
                    <li>Not prominent enough</li>
                    <li>Not handling all user scenarios</li>
                    <li>Not in the current styles of the application</li>
                  </ul>
                  <img src="/wall-of-development-app-2.png" />
                  <p>
                    Those types of examples are perfect for backing up that
                    statement about frameworks, libraries, using technology to
                    communicate better with the development team and creating a
                    meaningful and well functioning interface. You can stand
                    your ground and make it to the top of the wall. You will be
                    able to see what the other land holds. That Holy development
                    land 😇.
                  </p>
                  <p>
                    So for that specific case of alerts, I will share some
                    insights about how the design team took up that challenge
                    and improved it.
                  </p>
                  <h3 className={`${utilStyles.headingL}`}>
                    Reviewing the Github documentation.
                  </h3>
                  <p>
                    Start by reading carefully the whole documentation, so many
                    handy things are hidden behind the words of the well-written
                    Github repo.
                  </p>
                  <ul>
                    <li>Read about the properties</li>
                    <img src="/wall-of-development-app-3.png" />
                    <blockquote>
                      Learn about the structure and functionality of your
                      library. That way you will know how it was built and what
                      purpose it should serve.
                    </blockquote>
                    <li>Read about styling</li>
                    <img src="/wall-of-development-app-4.png" />
                    <blockquote>
                      Test it to see what and how it works. You can jump
                      straight up with the DevTools.
                    </blockquote>
                  </ul>
                  <p>
                    The fear of the designer to read documentations is true, but
                    everyone should handle those situations with passion and
                    also have the courage to ask. The developers helped me set
                    up an environment, so I can actually have full control over
                    the alert library and see what it is capable of. That’s how
                    we found out that there is more behind the alerts, more
                    functionalities that can help usability and create a better
                    experience of our application.
                  </p>
                  <img src="/wall-of-development-app-5.png" />
                  <blockquote>
                    We found more about the flexibility of delays and prominent
                    messaging.
                  </blockquote>
                  <p>An actual scenario can be:</p>
                  <blockquote>
                    If a user creates a request and should be educated where to
                    look when the request is handled and ready to be used, he
                    should go to a different page outside the current one. We
                    put the autoDismiss property to 0 and added a link which
                    redirects to the page where the pending requests live. This
                    way we make all the focus to the alert and educate where the
                    user can find specific things across the application.
                  </blockquote>
                  <h3 className={`${utilStyles.headingL}`}>
                    Identify where the styles.js file lives
                  </h3>
                  <p>
                    The styling of every library is held in a CSS file. In the
                    case of react-notification-system it was in a
                    <a href="https://github.com/igorprado/react-notification-system/blob/master/src/styles.js">
                      styles.js
                    </a>
                    . It is even part of the documentation that we just
                    reviewed.
                  </p>
                  <img src="/wall-of-development-app-6.png" />
                  <p>
                    Once we find that, we can start experimenting both inside
                    the browser (via Inspect elements from the DevTools panel)
                    and in the text editor. That way we can come to a conclusion
                    what are the best styles and features for the cases we are
                    trying to solve.
                  </p>
                  <img src="/wall-of-development-app-7.gif" />
                  <h3 className={`${utilStyles.headingL}`}>
                    Show off and share your styles
                  </h3>
                  <img src="/wall-of-development-app-8.png" />
                  <blockquote>
                    Proper visual communication and balance of the composition
                    are stepping stones for well-executed user experience 🤓.
                  </blockquote>
                  <p>
                    Once all the styles are overridden or added they should live
                    in the styles.js in your version of the library. By
                    committing the styles you can easily hand over to the
                    developer responsible for that feature to review and
                    continue working on it. This is such an organic way for a
                    designer to get involved in the production and actually make
                    interface decisions, which most of the time are left to be
                    done by him either way.
                  </p>
                  <h3 className={`${utilStyles.headingL}`}>
                    Everything is just a building block
                  </h3>
                  <p>
                    Now designers have the chance to make a real difference on
                    how the interface looks like and behaves. Meeting the
                    business goals, creating a consistent experience and
                    handling cases with care to details while having a real
                    architecture in mind. Not everything is Dribbble material
                    and this would be the best way for you to understand that. I
                    always appreciate articles like Responsive deliverables, so
                    they can remind me how simple and yet complex the design
                    discipline can be in the terms of Interface creation.
                  </p>
                  <img src="/wall-of-development-app-9.gif" />
                  <blockquote>
                    The top of the Dribbble homepage is a header, nav with
                    unordered lists and wrappers of ordered lists for the posts.
                  </blockquote>
                  <p>
                    If you want to read more on the subject I would recommend:
                  </p>
                  <ul>
                    <li>
                      <a href="https://bradfrost.com/writings/post/frontend-design-react-and-a-bridge-over-the-great-divide/">
                        “Frontend design, react, and a bridge over the great
                        divide”
                      </a>
                      by Brad Frost is detailed and well structured around
                      skills and knowledge in order to be a “frontend designer”.
                    </li>
                    <li>
                      <a href="https://css-tricks.com/the-great-divide/">
                        “The Great Divide”
                      </a>{" "}
                      in the Frontend world by Chris Coyie gives a good
                      explanation around the lands of “front” and “back”
                      Frontend.
                    </li>
                  </ul>
                  <p>
                    This article was published in{" "}
                    <a
                      href="https://uxdesign.cc/the-great-wall-of-development-f705ca982e58"
                      target="_blank"
                    >
                      Medium
                    </a>
                  </p>
                  <a className={`${utilStyles.mainCard}`} href="/writings/nda">
                    <div>
                      <h3 className={`${utilStyles.headingL}`}>
                        Implementing design system thinking to a product
                      </h3>
                    </div>
                    <small>Read more</small>
                  </a>
                </section>
              </div>
            </main>
          </div>
        </motion.div>
      </>
    </ThemeProvider>
  );
}

export default GreatWall;
