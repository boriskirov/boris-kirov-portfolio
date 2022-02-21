import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";

const Home = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Boris Kirov"
        description="Technical designer interested in systems, front-end, open source and collaborative design."
        image="https://www.boriskirov.me/main-meta-tag-image.png"
        name="Boris Kirov"
      />
      <Main>
        <h1 className="heading2Xl">Hi, I'm Boris </h1>
        <p>
          and used to get things done at{" "}
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
              <li className="blog">
                <Link href="/photography" as="/photography">
                  <a className="internalPassage">Photography</a>
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
