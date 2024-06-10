import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";

import Header from "../components/header";

import MainWrapper from "../components/mainWrapper";
import HomePageFooter from "../components/home-page-footer";
import boris from "../public/boris.json";

const Home = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Boris Kirov"
        description="Technical designer interested in systems, front-end, open source and collaborative design."
        image="https://www.boriskirov.me/main-meta-tag-image.png"
        name="Boris Kirov"
      />

      <Header />
      <div className="index-body-container" style={{ maxWidth: "672px" }}>
        <h1 className="heading2Xl">
          {boris.firstName} {""} {boris.familyName}
        </h1>
        <p>
          {boris.profession}. Prooving the value of design by getting things
          done at{" "}
          <Link href="https://elastic.co" className="external" target="_blank">
            {boris.experience[0].company}
          </Link>
          . Previously at{" "}
          <Link href="https://miro.com" className="external" target="_blank">
            {boris.experience[1].company}.
          </Link>
        </p>
      </div>
      <HomePageFooter />
    </MainWrapper>
  </Motion>
);

export default Home;
