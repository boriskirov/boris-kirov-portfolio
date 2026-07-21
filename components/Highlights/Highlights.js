import HighlightsData from "./data";
import Image from "next/image";

const Highlights = () => (
  <div className="metric">
    <details className="highlights-accordion">
      <summary className="highlights-summary">
        <span className="flex items-center highlights-summary-title">
          <Image
            src="/sparkle.svg"
            className="metric-logo"
            width={16}
            height={16}
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
      <ul className="highlights-list list-none">
        {HighlightsData.map((highlight) => (
          <li className="metric highlights-item" key={highlight.url}>
            <div>
              <div className="flex justify-between highlights-meta">
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
