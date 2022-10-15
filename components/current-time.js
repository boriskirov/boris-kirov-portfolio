import React from "react";

export default function AmsterdamTime() {
  const TimeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    dateStyle: "full",
  }).format();
  return (
    <div>
      <small>{TimeFomatter} • 🇳🇱 Amsterdam, The Netherlands</small>
    </div>
  );
}
