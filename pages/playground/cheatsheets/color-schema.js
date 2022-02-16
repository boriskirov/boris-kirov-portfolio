import React from "react";

import Motion from "../../../components/motion";
import Metadata from "../../../components/metadata";
import Link from "next/link";
import MainWrapper from "../../../components/mainWrapper";
import Main from "../../../components/innerWrapper";
import ColorSchema from "./color-schema-data";

function CopyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("colorCode");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}

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
          inspired by the P3 color space. Feel free to explore and use it.
        </p>
        <div className="contentWrapper">
          <section>
            {ColorSchema.map((colorschema) => (
              <div
                className={colorschema.name}
                key={colorschema.name}
                tabIndex="0"
              >
                <input
                  className={colorschema.class}
                  type="text"
                  defaultValue={colorschema.code}
                  id={colorschema.code}
                ></input>
                {/* <button onClick={CopyToClipboard}>Copy</button> */}
              </div>
            ))}
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default ColorPalette;
