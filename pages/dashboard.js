import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Image from "next/image";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import CurrentlyListening from "../components/currentlyListening";
import HighlightsData from "../components/Highlights/highlights-data";
import GithubMap from "../components/githubmap";
import RecentRepositories from "../components/recent-repositories";
import Boris from "../components/boris-stats";
import Highlights from "../components/Highlights/highlights";
import {
  getGitHubActivity,
  getRecentlyContributedRepositories,
} from "../lib/github-activity";
import boris from "../public/boris.json";

const Dashboard = ({ githubActivity, recentRepositories }) => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Dashboard"
        description="Interesting and valuable insights about my work, contributions, activities and interests. A collection of metrics and statistics from different sources."
        image="https://www.boriskirov.me/meta-tag-dashboard.png"
        name="Boris Kirov"
      />
      <Main>
        <h1 className="heading2Xl">Dashboard</h1>
        <p>
          Interesting and valuable insights about my work, contributions,
          activities and interests. A collection of metrics and statistics from
          different sources.
        </p>
        <hr />
        <div className="flex">
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
              <div className="flex flex-center metric-header">
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
            <h6>Recently contributed to</h6>
          </div>
          <RecentRepositories repositories={recentRepositories} />
        </div>
        {/* <CurrentlyListening /> */}

        <div className="metric">
          <div className="metric-header metric-header-split">
            <div className="flex flex-center metric-header-title">
              <Image
                src="/github.svg"
                className="metric-logo"
                width={24}
                height={24}
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

        <Highlights />
      </Main>
    </MainWrapper>
  </Motion>
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
