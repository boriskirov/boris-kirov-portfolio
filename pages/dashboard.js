import Image from "next/image";

import Page from "../components/Page";
import GithubMap from "../components/GithubMap";
import RecentRepositories from "../components/RecentRepositories";
import Boris from "../components/BorisStats";
import Highlights from "../components/Highlights/Highlights";
import HighlightsData from "../components/Highlights/data";
import NpmStats from "../components/NpmStats";
import {
  getGitHubActivity,
  getRecentlyContributedRepositories,
} from "../lib/github-activity";
import boris from "../public/boris.json";

const Dashboard = ({ githubActivity, recentRepositories }) => (
  <Page
    title="Dashboard"
    description="Interesting and valuable insights about my work, contributions, activities and interests. A collection of metrics and statistics from different sources."
    image="https://www.boriskirov.me/meta-tag-dashboard.png"
  >
    <h1 className="heading-2xl">Dashboard</h1>
    <p>
      Interesting and valuable insights about my work, contributions, activities
      and interests. A collection of metrics and statistics from different
      sources.
    </p>
    <hr />
    <div className="flex flex-col">
      <div className="metric borderless">
        <div className="metric-header">
          <h6>Metadata</h6>
        </div>
        <Boris />
      </div>
      <div className="metric borderless">
        <div className="metric-header flex">
          <Image
            src="/star.svg"
            className="metric-logo"
            width={16}
            height={16}
            alt="Star"
          />
          <h6>Starred project or contribution</h6>
        </div>
        <a
          href={HighlightsData[0].url}
          target="_blank"
          rel="noreferrer"
          className="metric recent-repo-card"
        >
          <div className="flex items-center metric-header">
            {" "}
            <h6>{HighlightsData[0].title}</h6>
            <span className="recent-repo-card-external" aria-hidden="true">
              ↗
            </span>
          </div>

          <Image
            src="/log-processing.png"
            className="recent-project-image"
            alt="GitHub"
            width={256}
            height={220}
          />
        </a>
      </div>
    </div>
    <div className="metric borderless">
      <div className="metric-header">
        <h6>Proud of contributing to</h6>
      </div>
      <RecentRepositories repositories={recentRepositories} />
    </div>

    <div className="metric">
      <div className="metric-header metric-header-split">
        <div className="flex items-center metric-header-title">
          <Image
            src="/github.svg"
            className="metric-logo"
            width={16}
            height={16}
            alt="GitHub"
          />
          <h6>Shipped contributions</h6>
        </div>
        <a
          href={boris.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="metric-header-link"
        >
          Go to GitHub profile
        </a>
      </div>
      <GithubMap activity={githubActivity} />
    </div>
    <NpmStats />
    <Highlights />
  </Page>
);

export default Dashboard;

export async function getStaticProps() {
  const [githubActivity, recentRepositories] = await Promise.all([
    getGitHubActivity(),
    getRecentlyContributedRepositories(),
  ]);

  return {
    props: {
      githubActivity,
      recentRepositories,
    },
    revalidate: 3600,
  };
}
