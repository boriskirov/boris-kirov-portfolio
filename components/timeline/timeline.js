import boris from "../../public/boris.json";
import Image from "next/image";

const Timeline = () => {
  return (
    <div>
      <ul className="timeline">
        <li className="timeline-item">
          <Image
            src="/elastic.png"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
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
            src="/elastic.png"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
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
            src="/elastic.png"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[2].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[2].company}
            </small>
            <small>{boris.experience[2].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/miro.png"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
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
        <li className="timeline-item">
          <Image
            src="/miro.png"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[4].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[4].company}
            </small>
            <small>{boris.experience[4].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/info.jpg"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[5].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[5].company}
            </small>
            <small>{boris.experience[5].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/softserve.jpg"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
          />
          <div className="timeline-info">
            <span>
              <strong>{boris.experience[6].role}</strong>
            </span>
            <small className="timeline-opacity-half">
              {boris.experience[6].company}
            </small>
            <small>{boris.experience[6].dates}</small>
          </div>
        </li>
        <li className="timeline-item">
          <Image
            src="/despark.jpg"
            width={24}
            height={24}
            className="timeline-icon"
            alt="Timeline icon"
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
