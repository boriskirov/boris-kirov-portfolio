import React from "react";

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

  return (
    <a
      type="button"
      aria-label="Theme toggle"
      className="theme-toggle"
      onClick={onClick}
    ></a>
  );
}
