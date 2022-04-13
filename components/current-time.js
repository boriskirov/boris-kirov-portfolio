import React from "react";

export default function AmsterdamTime() {
  const TimeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  return <small>{TimeFomatter}, Amsterdam</small>;
}
