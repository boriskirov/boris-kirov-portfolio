import React from "react";

import Motion from "../../../components/motion";
import Metadata from "../../../components/metadata";
import Link from "next/link";
import MainWrapper from "../../../components/mainWrapper";
import Main from "../../../components/innerWrapper";
import ColorData from "../../../components/color-schema-data";

function CopyToClipboard() {
  var colorschema = ["#123", "#321"];
  /* Get the text field */
  var copyText = document.getElementById(colorschema);
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}

// This is a function which returns a function
// the idea here that the first function will create a scope which will hold the value
// so by the time the inner function is called it will have access to value inside
function copyHex(hex) {
  return function () {
    navigator.clipboard.writeText(`${hex}`);
    alert(`Copied ${hex}`);
  };
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
            {ColorData.map((colorschema) => {
              return (
                <button
                  className="color-wrapper"
                  type="button"
                  key={colorschema.code}
                  style={{
                    backgroundColor: colorschema.code,
                  }}
                  // onClick needs a function, so we call our function
                  // which will the return a function to be used by onClick
                  onClick={copyHex(colorschema.code)}
                >
                  <span className="color-code">{colorschema.code}</span>
                </button>
              );
            })}
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default ColorPalette;
