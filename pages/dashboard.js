import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Image from "next/image";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import CurrentlyListening from "../components/currentlyListening";
import GithubMap from "../components/githubmap";
import Boris from "../components/boris-stats";
import Highlights from "../components/Highlights/highlights";
import { getGitHubActivity } from "../lib/github-activity";
import boris from "../public/boris.json";

const Dashboard = ({ githubActivity }) => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Dashboard"
        description="This is my personal dashboard with metrics and statistics from different platforms and tools."
        image="https://www.boriskirov.me/meta-tag-dashboard.png"
        name="Boris Kirov"
      />
      <Main>
        <h1 className="heading2Xl">Dashboard</h1>
        <p>
          This is my personal dashboard with metrics and statistics from
          different platforms and tools.
        </p>
        <hr />
        <Boris />
        <CurrentlyListening />

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
  const githubActivity = await getGitHubActivity();

  return {
    props: {
      githubActivity,
    },
    revalidate: 3600,
  };
}
