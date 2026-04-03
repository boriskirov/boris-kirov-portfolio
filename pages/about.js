import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";

import Image from "next/image";

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
        <h1 className="heading2Xl">Здрасти,</h1>
        <div className="contentWrapper">
          <Image
            src="/me.png"
            alt="About me photo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <section>
            <p>
              Hey, I'm {boris.firstName} a {boris.profession}. Working remotely,
              currently living in {boris.location.city},{" "}
              {boris.location.country}.
            </p>
          </section>
          <section>
            <p>{boris.longIntro}</p>
          </section>

          <section>
            <Timeline />
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default About;
