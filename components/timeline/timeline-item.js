import Image from "next/image";

const TimelineItem = ({ role, company, dates, src }) => {
  return (
    <li className="timeline-item">
      <Image src={src} width={24} height={24} className="timeline-icon" />
      <div className="timeline-info">
        <span>
          <strong>{role}</strong>
        </span>
        <small>{company}</small>
        <small>{dates}</small>
      </div>
    </li>
  );
};

export default TimelineItem;
