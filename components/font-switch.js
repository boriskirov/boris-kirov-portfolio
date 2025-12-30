import React from "react";
import { useCallback, useEffect } from "react";

export default function FontSwap() {
  const [mode, setMode] = React.useState("monospace"); // default monospace

  React.useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const theme = window.localStorage.getItem("__theme__");

    const initialTheme = theme || "monospace"; // default if none saved
    setMode(initialTheme);

    document.documentElement.classList.toggle(
      "monospace",
      initialTheme === "monospace"
    );

    // if nothing saved before, persist the default
    if (!theme) window.localStorage.setItem("__theme__", initialTheme);
  }, []);

  const onClick = useCallback(() => {
    setMode((m) => {
      const newTheme = m === "sans-serif" ? "monospace" : "sans-serif";

      document.documentElement.classList.toggle(
        "monospace",
        newTheme === "monospace"
      );

      if (typeof window !== "undefined") {
        window.localStorage.setItem("__theme__", newTheme);
      }

      return newTheme;
    });
  }, []);

  function Shorcut() {
    const handleKeyPress = useCallback(
      (event) => {
        if (event.altKey && event.keyCode === 83) {
          onClick();
        }
      },
      [onClick]
    );

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    return null; // important: components must return something
  }

  return (
    <a
      role="button"
      aria-label="Font toggle"
      className="font-toggle"
      onClick={onClick}
    >
      <Shorcut />
    </a>
  );
}
