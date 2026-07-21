import * as React from "react";
import data from "./data";
import Link from "next/link";

const Cheatsheet = () => {
  return (
    <div className="contentWrapper">
      {data.map((cheatsheet) => (
        <Link
          href={cheatsheet.url}
          key={cheatsheet.name}
          className={cheatsheet.class}
          target={cheatsheet.target}
          rel="noreferrer"
          passHref
        >
          <h6 className="headingM">{cheatsheet.name}</h6>
          <small>{cheatsheet.description}</small>
          <small className="tag">{cheatsheet.category}</small>
        </Link>
      ))}
    </div>
  );
};

export default Cheatsheet;
