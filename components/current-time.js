import React from "react";
import Image from "next/image";

export default function AmsterdamTime({ isCollapsed = false }) {
  const now = new Date();
  const fullFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
    hour12: false,
  });
  const fullValue = `${fullFormatter.format(now)} • 🇳🇱 Amsterdam`;

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
