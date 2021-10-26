import Link from "next/dist/client/link";

const Card = ({ title, description, link, type, target, className }) => {
  return (
    <Link href={link} rel="noopener noreferrer" as={link}>
      <a className={className} target={target}>
        <h6 className="headingL">{title}</h6>
        <small>{description}</small>
        <small className="tag">{type}</small>
      </a>
    </Link>
  );
};
export default Card;
