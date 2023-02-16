import HighlightsData from "./highlights-data";
import Image from "next/image";

const Highlights = () => (
  <div className="metric">
    <div className="flex flex-center metric-header">
      <Image
        src="/sparkle.svg"
        className="metric-logo"
        width={24}
        height={24}
        alt="npm"
      />
      <h6>Highlights</h6>
    </div>
    <ul>
      {HighlightsData.map((highlights) => {
        return (
          <div className="metric" key={highlights.title}>
            <div>
              <div className="flex space-between">
                <small>{highlights.project}</small>
                <small>{highlights.date}</small>
              </div>
              <a href={highlights.url} target="_blank" rel="noreferrer">
                <h6>{highlights.title}</h6>
              </a>
            </div>
          </div>
        );
      })}
    </ul>
  </div>
);

export default Highlights;
