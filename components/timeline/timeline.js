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
              <h6>{boris.experience[0].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[0].company}
              </small>
              <small>• {boris.experience[0].dates}</small>
            </div>
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
              <h6>{boris.experience[1].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[1].company}
              </small>
              <small>• {boris.experience[1].dates}</small>
            </div>
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
              <h6>{boris.experience[2].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[2].company}
              </small>
              <small>• {boris.experience[2].dates}</small>
            </div>
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
              <h6>{boris.experience[3].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[3].company}
              </small>
              <small>• {boris.experience[3].dates}</small>
            </div>
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
              <h6>{boris.experience[4].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[4].company}
              </small>
              <small>• {boris.experience[4].dates}</small>
            </div>
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
              <h6>{boris.experience[5].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[5].company}
              </small>
              <small>• {boris.experience[5].dates}</small>
            </div>
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
              <h6>{boris.experience[6].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[6].company}
              </small>
              <small>• {boris.experience[6].dates}</small>
            </div>
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
              <h6>{boris.experience[7].role}</h6>
            </span>
            <div className="flex">
              <small className="timeline-opacity-half">
                {boris.experience[7].company}
              </small>
              <small>• {boris.experience[7].dates}</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
