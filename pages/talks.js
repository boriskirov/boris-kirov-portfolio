import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";

const Playground = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Playground"
        description="My playground, the place where I explore the functional, visual and collaborative side of design."
        image="https://www.boriskirov.me/meta-tag-playground.png"
        name="Boris Kirov"
      />

      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">TALKS</h1>
        <p>
          Welcome to my talk space, where I explore and improve of how to
          articulate, communicate and present different design topics and
          challanges.
        </p>

        <div className="contentWrapper">
          <Card
            link="https://devxconf.org/"
            className="main-card"
            title="Designing for Developers"
            description="A journey of what it takes to design for developers, by walking through programming, web fundamentals and designs methods and practices to gain empathy."
            type="DevXconf"
            target="_blank"
          />
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Playground;
