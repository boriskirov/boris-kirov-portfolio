import Image from "next/image";
import boris from "../public/boris.json";

export default function Boris({}) {
  return (
    <div className="metric">
      <div className="flex flex-center metric-header">
        <Image
          src={boris.avatar}
          className="avatar"
          width={24}
          height={24}
          alt="avatar"
        />
        <h6>
          {" "}
          {boris.firstName} {""}
          {boris.familyName}
        </h6>
      </div>
      <div className="flex space-between">
        <div className="metric-pill">
          <small>Profession</small>
          <h6>{boris.profession}</h6>
        </div>
        <div className="metric-pill">
          <small>Location</small>
          <h6> {boris.location.city}</h6>
        </div>
        <div className="metric-pill">
          <small>Twitter</small>
          <h6> {boris.twitter}</h6>
        </div>
      </div>
      <div>
        <br />
      </div>
      <div className="location-screenshot">
        <Image
          src={boris.location.screenshot}
          layout="responsive"
          width={672}
          height={180}
        />
      </div>
    </div>
  );
}
