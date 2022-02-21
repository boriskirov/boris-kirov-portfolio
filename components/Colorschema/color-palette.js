import React from "react";

import ColorData from "../../components/Colorschema/color-schema-data";

// This is a function which returns a function
// the idea here that the first function will create a scope which will hold the value
// so by the time the inner function is called it will have access to value inside
function copyHex(hex) {
  return async function () {
    try {
      await navigator.clipboard.writeText(`${hex}`);
      // alert(`Copied ${hex}`);
    } catch (err) {
      alert("Failed to copy.", err);
    }
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1400);
  };
}

function Colors() {
  return (
    <div className="contentWrapper">
      {ColorData.map((colorschema) => {
        return (
          <button
            className="color-wrapper dark-text"
        	type="button"
		role="button"
            key={colorschema.code}
            style={{
              backgroundColor: colorschema.code,
            }}
            // onClick needs a function, so we call our function
            // which will the return a function to be used by onClick
            onClick={copyHex(colorschema.code)}
          >
            <span className={colorschema.tag}>{colorschema.code}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Colors;
