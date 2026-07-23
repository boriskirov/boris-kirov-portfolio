import React from "react";
import Link from "next/link";
import boris from "../public/boris.json";

// Companies to name-drop in the intro, in the order they appear in
// `experience[]`. Duplicates are collapsed (multiple roles at the same
// company show up once) and roles with `featuredInIntro: false` are skipped.
function useFeaturedCompanies() {
  const seen = new Set();
  const featured = [];
  for (const role of boris.experience) {
    if (role.featuredInIntro === false) continue;
    if (seen.has(role.company)) continue;
    seen.add(role.company);
    featured.push({ name: role.company, website: role.website });
  }
  return featured;
}

// `Design Engineer` is already rendered separately as `boris.profession`;
// we skip it from the tagline row to avoid duplication.
const taglineRoles = boris.roles.filter((r) => r !== boris.profession);

/**
 * Renders "Miro, INFO, and Despark" as inline <Link>s with correct commas
 * and an Oxford "and" before the last entry.
 */
function CompanyList({ companies }) {
  return companies.map((c, i) => {
    const isLast = i === companies.length - 1;
    const isSecondLast = i === companies.length - 2;
    return (
      <React.Fragment key={c.name}>
        <Link href={c.website} className="external" target="_blank">
          {c.name}
        </Link>
        {isLast ? "" : isSecondLast ? ", and " : ", "}
      </React.Fragment>
    );
  });
}

export default function WebMode() {
  const featured = useFeaturedCompanies();
  const [current, ...previous] = featured;

  return (
    <div>
      <h1 className="heading-2xl">
        {boris.firstName} {boris.familyName}
      </h1>
      <p>
        {boris.profession} •{" "}
        <Link
          href={boris.social.photography}
          className="external"
          target="_blank"
        >
          {taglineRoles[0]}
        </Link>{" "}
        {taglineRoles.slice(1).map((role) => `• ${role} `)}
        <br />I live in {boris.location.city}, and currently getting things done
        at{" "}
        {current && (
          <Link href={current.website} className="external" target="_blank">
            {current.name}
          </Link>
        )}
        . Before that I worked at <CompanyList companies={previous} />.
        <br />
        <br />
        <i>* Always remotely.</i>
      </p>
    </div>
  );
}
