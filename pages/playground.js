import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";
import Glow from "../components/glow";

const Playground = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Playground"
        description="My playground, the place where I explore the functional, visual and collaborative side of design."
        image="https://www.boriskirov.me/meta-tag-playground.png"
        name="Boris Kirov"
      />
      <div className="contentWrapper dot-grid">
        <Glow />
      </div>
      {/* 
      <Main>
        <Link href="/" className="backButton">
          Back
        </Link>
        <h1 className="heading2Xl">Playground</h1>
        <p>
          Welcome to my playground, where I explore the functional, visual and
          collaborative side of design. Feel free to browse through the
          projects, tools & experiments.
        </p>

        <div className="contentWrapper">
          <Card
            link="https://github.com/boriskirov/text-string"
            className="external main-card"
            title="Strings"
            description="A Figma plugin to generate different data fields for faster and more effective process in Elastic o11y use case."
            type="Figma plugin"
            target="_blank"
          />
          <Card
            link="https://www.mirotone.xyz"
            className="external main-card"
            title="Mirotone"
            description="Mirotone is a small & lightweight design system kit that tries to match Miro styles for helping you design, build and integrate apps."
            type="Package"
            target="_blank"
          />
          <Card
            link="/playground/my-glossary"
            className="main-card"
            title="Glossary"
            description="My personal resource that lists the methods, practices and ways of working I follow in design."
            type="Methods & Practices"
            target=""
          />
          <Card
            link="https://www.figma.com/community/plugin/943057200269205449/Handoff-notes"
            className="external main-card"
            title="Handoff notes"
            description="Prepare your work for handoff. Generate a note frame below each screen explain it and help others to understand the static designs better."
            type="Figma plugin"
            target="_blank"
          />
          <Card
            link="/playground/my-stack"
            className="main-card"
            title="Toolbox"
            description="List of tools & software I use daily to support my interest and hunger on the journey of designing software. The list can constantly change as I try to experiment with new solutions and methods."
            type="Tools & Software"
            target=""
          />
          <Card
            link="https://fluidigrid.com/"
            className="external main-card"
            title="Fluidigrid"
            description="Simple and lightweight CSS helper for building quick and efficient layouts."
            type="Package"
            target="_blank"
          />
          <Card
            link="https://www.fluiditype.com/"
            className="external main-card"
            title="Fluiditype"
            description="CSS library that focuses on responsive web and pure fluidity."
            type="Package"
            target="_blank"
          />
          <Card
            link="https://www.sketchappsources.com/free-source/3786-emojis-builder-sketch-freebie-resource.html"
            className="external main-card"
            title="Emoji builder"
            description="An emoji library, created by nested symbols and components to ease the creation of emoji. It is an open file which can be built onto. Use your creativity to create new emojis and bring new emotions. "
            type="Sketch library"
            target="_blank"
          />
          <Card
            link="/playground/cheatsheets"
            className="main-card"
            title="Cheatsheets"
            description="Working with speed and efficiency is essential when you spend your day designing and coding. This section of my website is dedicated to commands & shortcuts, so my day can be fun and productive."
            type="Helpers"
            target=""
          />
        </div>
      </Main> */}
    </MainWrapper>
  </Motion>
);

export default Playground;
