import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";

const Playground = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Playground"
        description="My playground, the place where I explore the functional, visual and collaborative side of design."
        image="/meta-tag-playground.png"
        name="Boris Kirov"
      />

      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">PLAYGROUND</h1>
        <p>
          Welcome to my playground, where I try to explore the functional,
          visual and collaborative side of design. Feel free to browse through
          the projects and experiment with them.
        </p>

        <div className="contentWrapper">
          <a
            className="externalPassage"
            href="https://www.mirotone.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Mirotone</h6>
            </div>
            <small>Package</small>
          </a>

          <Link
            href="/playground/my-glossary"
            rel="noopener noreferrer"
            as="/playground/my-glossary"
          >
            <a className="externalPassage">
              <style jsx>{`
                a {
                  cursor: e-resize;
                }
              `}</style>
              <div>
                <h6 className="headingL"> Glossary </h6>
              </div>
              <small>Methods & Practices</small>
            </a>
          </Link>

          <a
            className="externalPassage"
            href="https://www.figma.com/community/plugin/943057200269205449/Handoff-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Handoff Notes </h6>
            </div>
            <small>Figma plugin</small>
          </a>

          <Link
            href="/playground/my-stack"
            rel="noopener noreferrer"
            as="/playground/my-stack"
          >
            <a className="externalPassage">
              <style jsx>{`
                a {
                  cursor: e-resize;
                }
              `}</style>
              <div>
                <h6 className="headingL"> Toolbox </h6>
              </div>
              <small>Tools & Software</small>
            </a>
          </Link>

          <a
            className="externalPassage"
            href="https://fluidigrid.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Fluidigrid </h6>
            </div>
            <small>Package</small>
          </a>

          <a
            className="externalPassage"
            href="https://www.fluiditype.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Fluiditype </h6>
            </div>
            <small>Package</small>
          </a>

          <a
            className="externalPassage"
            href="https://www.sketchappsources.com/free-source/3786-emojis-builder-sketch-freebie-resource.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Emoji builder </h6>
            </div>
            <small>Sketch library</small>
          </a>

          <a
            className="externalPassage"
            href="https://github.com/boriskirov/git-commands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Git commands </h6>
            </div>
            <small>Helper doc</small>
          </a>

          <a
            className="externalPassage"
            href="https://github.com/boriskirov/figma-commands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Figma commands</h6>
            </div>
            <small>Helper doc</small>
          </a>

          <a
            className="externalPassage"
            href="https://github.com/boriskirov/shell-commands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h6 className="headingL">Shell commands</h6>
            </div>
            <small>Helper doc</small>
          </a>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Playground;
