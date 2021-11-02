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

function WeatherInAmsterdam() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const weatherReq = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${city}&days=1&aqi=no&alerts=no`
        );
        const weatherData = await weatherReq.json();
        setWeather({
          temperature: weatherData.current.temp_c + "°C",
        });
      } catch {}
    };
    fetchWeather("Amsterdam");
  }, []);
  return (
    <div className="flex">
      <small>{weather.temperature},</small>
    </div>
  );
}

const Header = () => (
  <header>
    <div className="flex">
      <WeatherInAmsterdam />
      <small>Amsterdam</small>
    </div>

    <DarkMode />
  </header>
);

export default Header;
