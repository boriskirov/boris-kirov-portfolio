import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Footer from "../components/footer";

const About = () => (
  <Motion>
    <MainWrapper>
      <Metadata title="About" />
      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">Здрасти,</h1>
        <div className="contentWrapper">
          <section>
            <img src="/me.png" />
            <small>`npx boriskirov`</small>
          </section>
          <section>
            <p>
              <span className="dropCap">M</span>y name is Boris Kirov. I'm a
              Bulgarian designer living in Amsterdam, The Netherlands. My care
              for form and function makes me express myself with technology.
              Currently, I'm building the Miro Platform experience and Design
              system.
            </p>
            <p>
              Before joining Miro I used to work with different companies like{" "}
              <a href="https://info.nl/" target="_blank">
                INFO
              </a>{" "}
              &{" "}
              <a href="https://despark.com/" target="_blank">
                Despark
              </a>{" "}
              and clients like Disney, BNP Paribas, Graydon & Tripscout. In my
              spare time, I enjoy exploring technology and building tools to
              empower others to build and progress. I am also fascinated by
              programs and how they can communicate with each other and with us.
              My passion for constant experimentation in the realm of design and
              experience consistency keeps me busy and always hungry. You can
              always reach me via{" "}
              <a href="https://twitter.com/sboriskirov" target="_blank">
                Twitter
              </a>{" "}
              or by booking a session on my{" "}
              <a
                href="https://www.adplist.org/mentors/boris-kirov"
                target="_blank"
              >
                ADPList
              </a>{" "}
              profile.
            </p>
            <p>
              Leaving time for sports like running, cycling, and jump rope is
              essential for my physical and mental health. But the most
              important one is the time for long walks with our lovely
              monochromatic, Mozilla firefox-looking, Dory. She is an amazing,
              smart, and incredibly responsive adopted mixed-breed dog.
            </p>
            <img src="/dory.png" />
            <p>
              Photography also is a passion of mine, with which I keep my
              creative juices flowing. I am fascinated by film photography and
              currently, I'm also deep into drone photography. You can check
              some of my flickaronies on{" "}
              <a href="https://instagram.com/yng.blds" target="_blank">
                Instagram
              </a>
              . Before I used to collaborate with clients like Tea House Sofia,
              FITC Amsterdam, and others.
            </p>
          </section>
          <section>
            <h6 className="headingM">This site works because of</h6>
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
                <h6 className="headingM">Next.js</h6>
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
                <h6 className="headingM">Vercel</h6>
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
                <h6 className="headingM">Framer Motion</h6>
              </div>
            </a>

            <a
              className="stackCard"
              href="https://www.fluiditype.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img className="stackCardImg" src="/fluiditype.svg" />
                <h6 className="headingM">Fluiditype</h6>
              </div>
            </a>
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
);

export default About;
