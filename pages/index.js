import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";
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
      <Main>
        <div>
          <h1 className="heading2Xl">Hi, I'm Boris </h1>
          <p>
            Currently I'm geting things done at{" "}
            <Link href="https://elastic.co">
              <a className="external" target="_blank">
                Elastic
              </a>
            </Link>
            . Previously at{" "}
            <Link href="https://miro.com">
              <a className="external" target="_blank">
                Miro
              </a>
            </Link>
          </p>
        </div>
        <div className="contentWrapper">
          <section>
            {/* <ul>
              <li className="blog">
                <Link href="/about" as="/about">
                  <a className="internalPassage">About</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/playground" as="/playground">
                  <a className="internalPassage">Playground</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/writings" as="/writings">
                  <a className="internalPassage">Writings</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/talks" as="/talks">
                  <a className="internalPassage">Talks</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/photography" as="/photography">
                  <a className="internalPassage">Photography</a>
                </Link>
              </li>
            </ul> */}
          </section>
        </div>
      </Main>
      <HomePageFooter />
    </MainWrapper>
  </Motion>
);

export default Home;
