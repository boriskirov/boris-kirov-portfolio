import React from "react";
import Image from "next/image";
import boris from "../public/boris.json";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: boris.location.timezone,
  hour: "numeric",
  minute: "numeric",
  weekday: "long",
  day: "numeric",
  month: "short",
  hour12: false,
});

export default function LocalTime({ isCollapsed = false }) {
  const fullValue = `${formatter.format(new Date())} • ${boris.location.flag} ${
    boris.location.city
  }`;

  return (
    <div
      className={`current-time ${isCollapsed ? "current-time-collapsed" : ""}`}
      title={isCollapsed ? fullValue : undefined}
      aria-label={fullValue}
    >
      {isCollapsed ? (
        <Image
          src="/clock.svg"
          alt=""
          width={16}
          height={16}
          className="current-time-icon icon"
          aria-hidden="true"
        />
      ) : (
        <small>{fullValue}</small>
      )}
    </div>
  );
}
