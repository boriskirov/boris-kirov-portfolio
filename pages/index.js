import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";

import Header from "../components/header";

import MainWrapper from "../components/mainWrapper";
import HomePageFooter from "../components/home-page-footer";

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
        <h1 className="heading2Xl">Boris Kirov </h1>
        <p>
          Software designer. Currently getting things done at{" "}
          <Link href="https://elastic.co">
            <a className="external" target="_blank">
              Elastic
            </a>
          </Link>
          . Previously at{" "}
          <Link href="https://miro.com">
            <a className="external" target="_blank">
              Miro.
            </a>
          </Link>
        </p>
        <div className="flex">
          <small className="tag shortcut">⌥ + D == Dark Mode</small>
          <small className="tag shortcut">⌥ + S == Font Swap</small>
          <small className="tag shortcut">⌥ + F == Search</small>
        </div>
      </div>
      <HomePageFooter />
    </MainWrapper>
  </Motion>
);

export default Home;
