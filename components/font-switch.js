import React from "react";
import { useCallback, useEffect } from "react";

export default function FontSwap() {
  const [mode, setMode] = React.useState("monospace"); // default monospace
  const storageKey = "__font_mode__";

  React.useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const savedMode = window.localStorage.getItem(storageKey);

    const initialMode = savedMode || "monospace"; // default if none saved
    setMode(initialMode);

    document.documentElement.classList.toggle(
      "monospace",
      initialMode === "monospace"
    );

    // if nothing saved before, persist the default
    if (!savedMode) window.localStorage.setItem(storageKey, initialMode);
  }, [storageKey]);

  const onClick = useCallback(() => {
    setMode((m) => {
      const newTheme = m === "sans-serif" ? "monospace" : "sans-serif";

      document.documentElement.classList.toggle(
        "monospace",
        newTheme === "monospace"
      );

      if (typeof window !== "undefined") {
        window.localStorage.setItem(storageKey, newTheme);
      }

      return newTheme;
    });
  }, [storageKey]);

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
