import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";

const Home = () => (
  <Motion>
    <MainWrapper>
      <Metadata />
      <Main>
        <h1 className="heading2Xl">Hi, I'm Boris </h1>
        <p>
          and I'm getting things done at{" "}
          <Link href="/miro" as="/miro">
            <a className="internalPassage">Miro</a>
          </Link>
        </p>
        <div className="contentWrapper">
          <section>
            <ul>
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
            </ul>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Home;
