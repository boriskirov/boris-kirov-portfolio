import Link from "next/dist/client/link";

const Card = ({ title, description, link, type, target, className }) => {
  return (
    <Link
      key={title}
      className={className}
      target={target}
      href={link}
      rel="noopener noreferrer"
      as={link}
    >
      <h6 className="headingL">{title}</h6>
      <small>{description}</small>
      <small className="tag">{type}</small>
    </Link>
  );
};
export default Card;
