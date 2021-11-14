import React from "react";
import { useKBar } from "kbar";

export function DarkMode() {
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
    <button
      type="button"
      aria-label="Theme toggle"
      className="theme-toggle"
      onClick={onClick}
    ></button>
  );
}

export function AmsterdamTime() {
  const TimeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  return <small>{TimeFomatter}, Amsterdam</small>;
}

export function CmdButton() {
  const { query } = useKBar();
  return (
    <button
      type="button"
      aria-label="Command button"
      className="cmd-button"
      onClick={query.toggle}
    ></button>
  );
}

const Header = () => (
  <header>
    <div className="flex">
      <AmsterdamTime />
    </div>
    <div className="flex">
      <DarkMode />
      <CmdButton />
    </div>
  </header>
);

export default Header;
