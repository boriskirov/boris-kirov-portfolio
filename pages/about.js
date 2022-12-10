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
import WebStack from "../components/Webstack/webstack";
import boris from "../public/boris.json";

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
        <Link href="/" className="backButton">
          Back
        </Link>
        <h1 className="heading2Xl">Здрасти,</h1>
        <div className="contentWrapper">
          <Image
            src="/me.png"
            alt="About me photo"
            layout="responsive"
            width={672}
            height={460}
          />
          <CurrentlyListening />
          <section>
            <p>
              <span className="dropCap">M</span>y name is {boris.firstName} {""}
              {boris.familyName}. I'm a {boris.profession} living in{" "}
              {boris.location.city}, {boris.location.country}. I'm developing
              skill through doing and my care for form and function makes me
              express myself with technology.
            </p>
            <br />
            <p>
              Currently I'm working at {boris.experience[0].company} , the
              company behind the Elastic Stack, where we help people explore and
              analyze data, while using the power of search.
            </p>
            <br />
            <p>
              I used to help{" "}
              <a href="https://www.miro.com" target="_blank" rel="noreferrer">
                {boris.experience[1].company}
              </a>{" "}
              on their Platform journey . Before that{" "}
              <a href="https://info.nl/" target="_blank" rel="noreferrer">
                {boris.experience[2].company}
              </a>{" "}
              &{" "}
              <a href="https://despark.com/" target="_blank" rel="noreferrer">
                {boris.experience[3].company}
              </a>
              .
            </p>
            <p>
              {" "}
              My fascination for software, programs and communciation mixed with
              passion for constant experimentation in the realm of design and
              experience consistency keeps me busy and always hungry. You can
              always reach me via{" "}
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
            <br />
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
              width={672}
              height={460}
              layout="responsive"
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
            <WebStack />
            <FeedbackForm
              description={
                "You want to share or reach out regarding something I wrote, or you want to have a friendly chat with me? Send me a DM in Twitter."
              }
            />
          </section>{" "}
        </div>
      </Main>
      <Footer />
    </MainWrapper>
  </Motion>
);

export default About;
