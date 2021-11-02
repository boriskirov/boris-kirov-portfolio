import * as React from "react";

function DarkMode() {
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

// export function Time() {
//   const time = new Date().toLocaleString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });
//   return <small className="time">{time},</small>;
// }

const Header = () => (
  <header>
    <div className="flex">
      {/* <Time /> */}
      <small>Amsterdam</small>
    </div>
    {/* <small>Crafted in Amsterdam ♥️</small> */}
    <DarkMode />
  </header>
);

export default Header;
