import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/headata";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

function Blog() {
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
        <div className="mainWrapper">
          <HeadData />

          <Header />

          <main className="innerWrapper">
            <Link href="/">
              <a className="backButton">Back</a>
            </Link>
            <h1 className="heading2Xl">Здрасти,</h1>

            <div className="contentWrapper">
              <section>
                <img src="/me.png" />
                <p>
                  <span className="dropCap">M</span> y name is Boris Kirov. I'm
                  a Bulgarian designer living in Amsterdam, The Netherlands. I
                  use technology to express myself and I'm currently building
                  the Miro Design system and Platform experience.
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
                  and clients like Disney, BNP Paribas, Graydon & Tripscout. In
                  my spare time, I enjoy exploring technology and building tools
                  to empower others to build and progress. I am also fascinated
                  by programs and how they can communicate between eachother and
                  with us. My passion for constant experimentation in the realm
                  of design and experience consistency keeps my busy and always
                  hungry. You can always reach me via{" "}
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
                  Leaving time for sports like running, cycling and jump rope is
                  essential and important for my physical and mental health. But
                  the most important one is the time for long walks with our
                  lovely monochromatic Mozilla firefox looking Dory. She is an
                  amazingly smart and incredibly responsive adopted mixed-breed
                  dog.
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
                <h3 className="headingM">This site works because of</h3>
                <a
                  className="stackCard"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      className="stackCardImg"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asapdevelopers.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fnext_js.png&f=1&nofb=1"
                    />
                    <h3 className="headingM">Next.js</h3>
                  </div>
                </a>

                <a
                  className="stackCard"
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      className="stackCardImg"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fvercel_7966_logo_1591610946_s90wa.png&f=1&nofb=1"
                    />
                    <h3 className="headingM">Vercel</h3>
                  </div>
                </a>

                <a
                  className="stackCard"
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      className="stackCardImg"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappjoy.org%2Fwp-content%2Fuploads%2F2016%2F09%2FFramer-Framerjs-logo.jpg&f=1&nofb=1"
                    />
                    <h3 className="headingM">Framer Motion</h3>
                  </div>
                </a>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default Blog;
