import React from "react";

import Motion from "../../../components/motion";
import Metadata from "../../../components/metadata";
import Link from "next/link";
import MainWrapper from "../../../components/mainWrapper";
import Main from "../../../components/innerWrapper";
import Colors from "../../../components/Colorschema/color-palette";
import Card from "../../../components/card";

const ColorPalette = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Color Schema"
        description="My personal color schema for creating visual schemas and architecture, inspired by the P3 color space. Feel free to explore and use it."
        image="https://www.boriskirov.me/meta-tag-color-palette.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground/cheatsheets">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">COLOR SCHEMA</h1>
        <p>
          My personal color schema for creating visual schemas and architecture,
          inspired by the P3 color space. Feel free to explore and use them.
        </p>
        <Link
          href="https://gist.github.com/boriskirov/8f146a2ea71dc3f6502e720cc7f24ca8"
          target="_blank"
        >
          <a className="">Github Gist</a>
        </Link>
        <Colors />
      </Main>
    </MainWrapper>
  </Motion>
);

export default ColorPalette;
