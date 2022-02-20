import React from "react";

import Motion from "../../../components/motion";
import Metadata from "../../../components/metadata";
import Link from "next/link";
import MainWrapper from "../../../components/mainWrapper";
import Main from "../../../components/innerWrapper";
import Colors from "../../../components/Colorschema/color-palette";

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
        <h1 className="heading2Xl">COLOR PALETTE</h1>
        <p>
          My personal color schema for creating visual schemas and architecture,
          inspired by the P3 color space.
        </p>
        <p>
          You can either copy each of the colors from the palette below or get
          them for your projects via:
        </p>
        <ul>
          <li>
            <Link href="https://gist.github.com/boriskirov/8f146a2ea71dc3f6502e720cc7f24ca8">
              <a target="_blank">Github Gist</a>
            </Link>
          </li>
          <li>
            <Link href="/../../color-palette.svg">
              <a target="_blank">SVG string</a>
            </Link>{" "}
            which you can paste in Figma for example
          </li>
        </ul>

        <Colors />
      </Main>
      <div id="snackbar">Copied</div>
    </MainWrapper>
  </Motion>
);

export default ColorPalette;
