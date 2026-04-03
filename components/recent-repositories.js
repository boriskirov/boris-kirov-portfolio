import Image from "next/image";

const compactCountFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

function formatCompactCount(value) {
  if (typeof value !== "number") return null;

  return compactCountFormatter.format(value).replace("K", "k");
}

export default function RecentRepositories({ repositories = [] }) {
  if (repositories.length === 0) return null;

  return (
    <div className="recent-repo-grid">
      {repositories.map((repository) => (
        <a
          key={repository.nameWithOwner}
          href={repository.url}
          target="_blank"
          rel="noreferrer"
          className="recent-repo-card external"
        >
          <div className="recent-repo-card-header">
            <div className="recent-repo-card-title-group">
              <div className="recent-repo-card-title-row">
                <h6 className="recent-repo-card-name">
                  {repository.nameWithOwner}
                </h6>
                <small className="recent-repo-card-visibility">
                  {repository.visibility}
                </small>
              </div>
              {repository.description ? (
                <small className="recent-repo-card-description">
                  {repository.description}
                </small>
              ) : null}
            </div>
            <span className="recent-repo-card-external" aria-hidden="true">
              ↗
            </span>
          </div>

          <div className="recent-repo-card-meta">
            {repository.language ? (
              <small className="recent-repo-card-language">
                <span className="recent-repo-card-language-dot" />
                <span>{repository.language}</span>
              </small>
            ) : null}
            {typeof repository.stargazersCount === "number" ? (
              <small className="recent-repo-card-stat">
                <span className="recent-repo-card-stat-label">
                  <Image src="/star.svg" alt="Stars" width={12} height={12} />
                </span>
                <span>{formatCompactCount(repository.stargazersCount)}</span>
              </small>
            ) : null}
            {typeof repository.forksCount === "number" ? (
              <small className="recent-repo-card-stat">
                <span className="recent-repo-card-stat-label">
                  <Image src="/fork.svg" alt="Forks" width={12} height={12} />
                </span>
                <span>{formatCompactCount(repository.forksCount)}</span>
              </small>
            ) : null}
          </div>
        </a>
      ))}
    </div>
  );
}
