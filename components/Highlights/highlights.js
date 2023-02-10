import HighlightsData from "./highlights-data";
import Image from "next/image";

const Highlights = () => (
  <div className="contentWrapper">
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
            <div className="metric">
              <a href={highlights.url} target="_blank">
                <small>{highlights.title}</small>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  </div>
);

export default Highlights;
