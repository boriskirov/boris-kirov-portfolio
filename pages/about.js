import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Footer from "../components/Footer/footer";
import CurrentlyListening from "../components/currentlyListening";
import Image from "next/image";
import FeedbackForm from "../components/feedbackForm";
import StravaStats from "../components/stravaCard";
import HomePageFooter from "../components/home-page-footer";

const About = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="About"
        description="Technical designer interested in systems, front-end, open source and collaborative design."
        image="https://www.boriskirov.me/me.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">Здрасти,</h1>
        <div className="contentWrapper">
          <Image src="/me.png" alt="About me photo" width={1080} height={720} />
          <CurrentlyListening />

          <section>
            <p>
              <span className="dropCap">M</span>y name is Boris Kirov. I'm a
              Bulgarian designer living in Amsterdam, The Netherlands. My care
              for form and function makes me express myself with technology.
              Currently I'm working at{" "}
              <a href="https://www.elastic.co" target="_blank" rel="noreferrer">
                Elastic
              </a>
              , the company behind the Elastic Stack, where we help people
              explore and analyze data, while using the power of search.
            </p>
            <p>
              My previous experience was as a Platform designer in{" "}
              <a href="https://www.miro.com" target="_blank" rel="noreferrer">
                Miro
              </a>
              , the Whiteboard Platform. Before that I used to work with
              different companies like{" "}
              <a href="https://info.nl/" target="_blank" rel="noreferrer">
                INFO
              </a>{" "}
              &{" "}
              <a href="https://despark.com/" target="_blank" rel="noreferrer">
                Despark
              </a>{" "}
              and clients like Disney, BNP Paribas, Graydon & Tripscout. In my
              spare time, I enjoy exploring technology and building tools to
              empower others to build and progress.
            </p>
            <p>
              {" "}
              I am also fascinated by programs and how they can communicate with
              each other and with us. My passion for constant experimentation in
              the realm of design and experience consistency keeps me busy and
              always hungry. You can always reach me via{" "}
              <a
                href="https://twitter.com/sboriskirov"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{" "}
              or by booking a session on my{" "}
              <a
                href="https://www.adplist.org/mentors/boris-kirov"
                target="_blank"
                rel="noreferrer"
              >
                ADPList
              </a>{" "}
              profile.
            </p>
            <StravaStats />
            <p>
              Leaving time for sports like running, cycling, and jump rope is
              essential for my physical and mental health. But the most
              important one is the time for long walks with our lovely
              monochromatic, Mozilla firefox-looking, Dory. She is an amazing,
              smart, and incredibly responsive adopted mixed-breed dog.
            </p>
            <Image
              src="/dory.png"
              alt="Dory the Mozilla firefox-looking adopted mixed-breed dog"
              width={1080}
              height={720}
            />
            <p>
              Photography also is a passion of mine, with which I keep my
              creative juices flowing. I am fascinated by film photography and
              currently, I'm also deep into drone photography. You can check
              some of my flickaronies on{" "}
              <a
                href="https://instagram.com/yng.blds"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              . Before I used to collaborate with clients like Tea House Sofia,
              FITC Amsterdam, and others.
            </p>
          </section>
          <section>
            <h6 className="headingM">This site works because of</h6>
            <a
              className="stack-card"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/nextjs.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Next.js</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/vercel.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Vercel</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/framer.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Framer Motion</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://www.fluiditype.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/fluiditype.svg"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Fluiditype</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://p3colorpicker.cool"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/p3-picker.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">DCI-P3</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/inter-logo.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Inter</h6>
              </div>
            </a>
            <a
              className="stack-card"
              href="https://phosphoricons.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="stack card image"
                  className="stack-card-img"
                  src="/phosphor.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Phosphor icons</h6>
              </div>
            </a>
            <FeedbackForm
              description={
                "You want to share or reach out regarding something I wrote, or you want to have a friendly chat with me? Send me a DM in Twitter."
              }
            />
          </section>
        </div>
      </Main>
      <Footer />
    </MainWrapper>
  </Motion>
);

export default About;
