import React from "react";

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

  return (
    <a
      type="button"
      aria-label="Font toggle"
      className="font-toggle"
      onClick={onClick}
    ></a>
  );
}
