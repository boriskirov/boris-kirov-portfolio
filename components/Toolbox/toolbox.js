import * as React from "react";
import Image from "next/image";
import data from "./data";

const Toolbox = () => {
  return (
    <div className="contentWrapper">
      {data.map((tooblox) => (
        <a
          key={tooblox.id}
          className="stackCard"
          href={tooblox.url}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Image
              width={48}
              height={48}
              alt={tooblox.name}
              className="stackCardImg"
              src={tooblox.image}
            />
            <h6 className="headingM">{tooblox.name}</h6>
          </div>
          <small className="tag">{tooblox.category}</small>
        </a>
      ))}
    </div>
  );
};

export default Toolbox;
