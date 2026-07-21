import Link from "next/link";
import Card from "../Card";
import data from "./data";

const Cheatsheet = () => (
  <div className="contentWrapper">
    {data.map((cheatsheet) => (
      <Card
        as={Link}
        variant="column"
        key={cheatsheet.name}
        href={cheatsheet.url}
        target={cheatsheet.target}
        rel="noreferrer"
        className={cheatsheet.external ? "cursor-external" : undefined}
      >
        <h6 className="heading-md">{cheatsheet.name}</h6>
        <small>{cheatsheet.description}</small>
        <small className="tag">{cheatsheet.category}</small>
      </Card>
    ))}
  </div>
);

export default Cheatsheet;
