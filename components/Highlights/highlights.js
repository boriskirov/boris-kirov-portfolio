import HighlightsData from "./highlights-data";
import Image from "next/image";

const Highlights = () => (
  <div className="metric">
    <details className="highlights-accordion">
      <summary className="highlights-summary">
        <span className="flex flex-center highlights-summary-title">
          <Image
            src="/sparkle.svg"
            className="metric-logo"
            width={24}
            height={24}
            alt="Highlights"
          />
          <h6>Highlights</h6>
        </span>
        <span
          className="metric-badge"
          aria-label={`${HighlightsData.length} highlights`}
        >
          {HighlightsData.length}
        </span>
      </summary>
      <ul className="highlights-list list-style-none">
        {HighlightsData.map((highlight) => (
          <li className="metric highlights-item" key={highlight.url}>
            <div>
              <div className="flex space-between highlights-meta">
                <small>{highlight.project}</small>
                <small>{highlight.date}</small>
              </div>
              <a
                className="highlights-link"
                href={highlight.url}
                target="_blank"
                rel="noreferrer"
              >
                <h6>{highlight.title}</h6>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </details>
  </div>
);

export default Highlights;
