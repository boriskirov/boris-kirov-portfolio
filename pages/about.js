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
        description="Design Engineer interested in systems, open source and design."
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
            style={{
              width: "50%",
              height: "auto",
              margin: "0 auto",
              paddingBottom: "2rem",
            }}
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
            <div className="metric">
              <div className="metric-header flex">
                <Image
                  src="/steps.svg"
                  className="metric-logo"
                  width={16}
                  height={16}
                  alt="Star"
                />
                <h6>Career Timeline</h6>
              </div>
              <hr />
              <Timeline />
            </div>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default About;
