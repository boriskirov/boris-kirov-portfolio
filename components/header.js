import React from "react";
import FontSwap from "../components/font-switch";
import DarkMode from "../components/theme-switch";
import AmsterdamTime from "../components/current-time";

const Header = () => (
  <header>
    <div className="flex">
      <AmsterdamTime />
    </div>
    <div className="flex">
      <DarkMode />
      <FontSwap />
    </div>
  </header>
);

export default Header;
