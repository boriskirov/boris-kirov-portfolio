import Image from "next/image";

const monthFormatter = new Intl.DateTimeFormat("en-GB", { month: "short" });
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function getMonthLabels(weeks = []) {
  let previousMonth = null;

  return weeks.map((week, index) => {
    const firstDay = week?.contributionDays?.[0];
    if (!firstDay?.date) {
      return {
        key: `empty-${index}`,
        label: "",
      };
    }

    const currentMonth = monthFormatter.format(new Date(firstDay.date));
    const shouldShow = currentMonth !== previousMonth;
    previousMonth = currentMonth;

    return {
      key: `${currentMonth}-${index}`,
      label: shouldShow ? currentMonth : "",
    };
  });
}

function formatActivityDate(date) {
  return dateFormatter.format(new Date(date));
}

function formatContributionTitle(count, date) {
  const contributionLabel =
    count === 1 ? "1 contribution" : `${count} contributions`;
  return `${contributionLabel} on ${formatActivityDate(date)}`;
}

function getActivityTypeIcon(type) {
  const iconMap = {
    pr: "/pr.svg",
    commit: "/commit.svg",
    issue: "/github.svg",
    review: "/github.svg",
  };

  return iconMap[type] || "/github.svg";
}

export default function GithubMap({ activity }) {
  const weeks = activity?.calendar?.weeks ?? [];
  const items = activity?.items ?? [];
  const monthLabels = getMonthLabels(weeks);
  const graphColumnsStyle =
    weeks.length > 0
      ? { gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }
      : undefined;

  return (
    <div className="github-activity">
      <div className="github-graph">
        <div className="github-graph-header">
          <span className="github-log-label">contributions.graph</span>
          {activity?.totalContributions ? (
            <span
              className="metric-badge"
              aria-label={`${activity.totalContributions.toLocaleString()} contributions`}
            >
              {activity.totalContributions.toLocaleString()}
            </span>
          ) : null}
        </div>

        {weeks.length > 0 ? (
          <>
            <div
              className="github-graph-months"
              aria-hidden="true"
              style={graphColumnsStyle}
            >
              {monthLabels.map((month) => (
                <span key={month.key} className="github-graph-month">
                  {month.label}
                </span>
              ))}
            </div>
            <div className="github-graph-grid" style={graphColumnsStyle}>
              {weeks.map((week, weekIndex) => (
                <div key={`week-${weekIndex}`} className="github-graph-week">
                  {(week.contributionDays ?? []).map((day) => (
                    <span
                      key={day.date}
                      className="github-graph-day"
                      style={{
                        backgroundColor:
                          day.contributionCount > 0
                            ? day.color
                            : "var(--tag-color-bg)",
                      }}
                      title={formatContributionTitle(
                        day.contributionCount,
                        day.date,
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="github-graph-empty">
            <small>No public GitHub activity available right now.</small>
          </div>
        )}
      </div>

      <div className="github-log-panel">
        <div className="github-log-scroll">
          <div className="github-log-columns" aria-hidden="true">
            <span className="github-log-column github-log-column-type">
              Type
            </span>
            <span className="github-log-column github-log-column-title">
              Title
            </span>
            <span className="github-log-column github-log-column-repo">
              Repo
            </span>
            <span className="github-log-column github-log-column-date">
              Timestamp
            </span>
          </div>

          {items.length > 0 ? (
            <ul className="github-log-list">
              {items.map((item) => (
                <li key={item.id} className="github-log-item">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-log-link"
                  >
                    <span className="github-log-cell github-log-cell-type">
                      <span
                        className={`github-log-badge github-log-badge-${item.type}`}
                        title={item.typeLabel}
                      >
                        <Image
                          src={getActivityTypeIcon(item.type)}
                          className="icon github-log-type-icon"
                          width={18}
                          height={18}
                          alt={item.typeLabel}
                        />
                      </span>
                    </span>
                    <small className="github-log-action">{item.label}</small>
                    <small className="github-log-repo github-log-cell-repo">
                      {item.repo}
                    </small>
                    <small className="github-log-date github-log-cell-date">
                      {formatActivityDate(item.occurredAt)}
                    </small>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="github-log-empty">
              <small>No public GitHub activity available right now.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
