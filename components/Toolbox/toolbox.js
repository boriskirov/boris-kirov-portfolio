import * as React from "react";
import Image from "next/image";
import data from "./data";
import { motion } from "framer-motion";

const Toolbox = () => {
  return (
    <div className="contentWrapper">
      {data.map((tooblox) => (
        <motion.a
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.23 },
          }}
          key={tooblox.name}
          className="stack-card"
          href={tooblox.url}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Image
              width={48}
              height={48}
              alt={tooblox.name}
              className="stack-card-img"
              src={tooblox.image}
            />
            <h6 className="headingM">{tooblox.name}</h6>
          </div>
          <small className="tag">{tooblox.category}</small>
        </motion.a>
      ))}
    </div>
  );
};

export default Toolbox;
