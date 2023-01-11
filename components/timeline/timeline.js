import boris from "../../public/boris.json";
import Image from "next/image";

const Timeline = () => {
  return (
    <div>
      <ul className="timeline">
        <li className="timeline-item">
          <Image
            src="/elastic.svg"
            width={24}
            height={24}
            className="timeline-icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[0].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[0].company}
            </small>
            <small>{boris.experience[0].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/miro.svg"
            width={24}
            height={24}
            className="timeline-icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[1].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[1].company}
            </small>
            <small>{boris.experience[1].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/info.svg"
            width={24}
            height={24}
            className="timeline-icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[2].role}</strong>
            </span>
            <small>{boris.experience[2].company}</small>
            <small>{boris.experience[2].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/despark.svg"
            width={24}
            height={24}
            className="timeline-icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[3].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[3].company}
            </small>
            <small>{boris.experience[3].dates}</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
