import { identity } from "lodash";
import React, { useState, useEffect } from "react";

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

export function Amsterdam() {
  const [weather, setTime] = useState({});
  useEffect(() => {
    const fetchTime = async (city) => {
      try {
        const weatherReq = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${city}&days=1&aqi=no&alerts=no`
        );
        const timeData = await weatherReq.json();
        setTime({
          time: timeData.location.localtime + " " + timeData.location.name,
        });
      } catch {}
    };
    fetchTime("Amsterdam");
  }, []);
  return <small>{weather.time}</small>;
}

const Header = () => (
  <header>
    <div className="flex">
      <Amsterdam />
    </div>

    <DarkMode />
  </header>
);

export default Header;
