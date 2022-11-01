import React from "react";
import { useCallback, useEffect } from "react";

export default function DarkMode() {
  const [mode, setMode] = React.useState("light");

  React.useEffect(() => {
    const theme = window.localStorage.getItem("__theme__");
    if (theme) {
      setMode(() => theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      setMode((m) => (m === "light" ? "dark" : "light"));
      window.localStorage.setItem("__theme__", mode);
    }
  }, []);

  const onClick = () => {
    setMode((m) => {
      const newTheme = m === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
      window.localStorage.setItem("__theme__", newTheme);

      return newTheme;
    });
  };

  function Shorcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 68) {
        onClick(true);
        console.log(event.key, event.keyCode);
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
      aria-label="Theme toggle"
      className="theme-toggle"
      onClick={onClick}
    >
      <Shorcut />
    </a>
  );
}
