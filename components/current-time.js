import React from "react";

export default function AmsterdamTime() {
  const TimeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
    hour12: false,
  }).format();
  return (
    <div>
      <small>{TimeFomatter} • 🇳🇱 Amsterdam</small>
    </div>
  );
}
