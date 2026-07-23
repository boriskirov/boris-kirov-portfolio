import Image from "next/image";
import boris from "../public/boris.json";

export default function Boris({}) {
  const profileMetrics = [
    {
      label: "Profession",
      value: boris.profession,
    },
    {
      label: "Location",
      value: boris.location.city,
    },
    {
      label: "Currently at",
      value: boris.currentCompany || boris.experience?.[0]?.company,
    },
    {
      label: "Work mode",
      value: boris.workMode,
    },
    {
      label: "Contact",
      value: boris.email,
    },
  ].filter((metric) => metric.value);

  return (
    <div className="metric">
      <div className="flex items-center metric-header">
        <Image
          src={boris.avatar}
          className="avatar"
          width={18}
          height={18}
          alt="avatar"
        />
        <h6>
          {" "}
          {boris.firstName} {""}
          {boris.familyName}
        </h6>
      </div>
      <div className="metric-pill-grid">
        {profileMetrics.map((metric) => (
          <div className="metric-pill" key={metric.label}>
            <small>{metric.label}</small>
            <h6>{metric.value}</h6>
          </div>
        ))}
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
          alt="location"
        />
      </div>
    </div>
  );
}
