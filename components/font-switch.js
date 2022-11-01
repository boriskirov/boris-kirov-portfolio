import React from "react";
import { useCallback, useEffect } from "react";

export default function FontSwap() {
  const [mode, setMode] = React.useState("sans-serif");

  React.useEffect(() => {
    const theme = window.localStorage.getItem("__theme__");
    if (theme) {
      setMode(() => theme);
      if (theme === "monospace") {
        document.documentElement.classList.add("monospace");
      }
    } else {
      setMode((m) => (m === "sans-serif" ? "monospace" : "sans-serif"));
      window.localStorage.setItem("__theme__", mode);
    }
  }, []);

  const onClick = () => {
    setMode((m) => {
      const newTheme = m === "sans-serif" ? "monospace" : "sans-serif";
      document.documentElement.classList.toggle("monospace");
      window.localStorage.setItem("__theme__", newTheme);

      return newTheme;
    });
  };

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 83) {
        onClick(true);
      }
    }, []);

    useEffect(() => {
      // attach the event listener
      document.addEventListener("keydown", handleKeyPress);

      // remove the event listener
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);
  }

  return (
    <a
      type="button"
      aria-label="Font toggle"
      className="font-toggle"
      onClick={onClick}
    >
      <Shorcut />
    </a>
  );
}
