import Image from "next/image";
import { motion } from "framer-motion";

import Card from "../Card";
import data from "./data";

const hoverBg = {
  backgroundColor: "var(--card-color-hover)",
  transition: { duration: 0.23 },
};

const Toolbox = () => (
  <div className="contentWrapper">
    {data.map((tool) => (
      <Card
        as={motion.a}
        variant="row"
        key={tool.name}
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        whileHover={hoverBg}
      >
        <div>
          <Image width={48} height={48} alt={tool.name} src={tool.image} />
          <h6 className="heading-md">{tool.name}</h6>
        </div>
        <small className="tag">{tool.category}</small>
      </Card>
    ))}
  </div>
);

export default Toolbox;
