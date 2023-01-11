import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Footer from "../components/Footer/footer";

import Image from "next/image";
import FeedbackForm from "../components/feedbackForm";

import boris from "../public/boris.json";
import Timeline from "../components/timeline/timeline";

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
          <Image src="/me.png" alt="About me photo" width={672} height={460} />
          <section>
            <p>
              <span className="dropCap">M</span>y name is {boris.firstName} {""}
              {boris.familyName}. I'm a {boris.profession} living in{" "}
              {boris.location.city}, {boris.location.country}.
            </p>
          </section>
          <section>
            <p>{boris.longIntro}</p>
          </section>

          <section>
            <Timeline />
          </section>

          <FeedbackForm
            description={
              "You want to share or reach out regarding something I wrote, or you want to have a friendly chat with me? Send me a DM in Twitter."
            }
          />
        </div>
      </Main>
      <Footer />
    </MainWrapper>
  </Motion>
);

export default About;
