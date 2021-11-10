import * as React from "react";
import data from "./cheatsheet-data";

const Cheatsheet = () => {
  return (
    <div className="contentWrapper">
      {data.map((cheatsheet) => (
        <a
          key={cheatsheet.name}
          className=" external main-card"
          href={cheatsheet.url}
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="headingM">{cheatsheet.name}</h6>
          <small>{cheatsheet.description}</small>
          <small className="tag">{cheatsheet.category}</small>
        </a>
      ))}
    </div>
  );
};

export default Cheatsheet;
