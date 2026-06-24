import { useCallback, useEffect, useRef } from "react";
import { useShortcut } from "../lib/use-shortcut";

const STORAGE_KEY = "__font_mode__";
const DEFAULT_MODE = "monospace";

export default function FontSwap() {
  const modeRef = useRef(DEFAULT_MODE);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    const initialMode = savedMode || DEFAULT_MODE;
    modeRef.current = initialMode;

    document.documentElement.classList.toggle(
      "monospace",
      initialMode === "monospace",
    );

    if (!savedMode) window.localStorage.setItem(STORAGE_KEY, initialMode);
  }, []);

  const onClick = useCallback(() => {
    const newTheme =
      modeRef.current === "sans-serif" ? "monospace" : "sans-serif";
    modeRef.current = newTheme;

    document.documentElement.classList.toggle(
      "monospace",
      newTheme === "monospace",
    );

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newTheme);
    }
  }, []);

  useShortcut({ alt: true, keyCode: 83 }, onClick);

  return (
    <a
      role="button"
      aria-label="Font toggle"
      className="font-toggle"
      onClick={onClick}
    />
  );
}
