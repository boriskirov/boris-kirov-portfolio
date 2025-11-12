import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Image from "next/image";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import StravaStats from "../components/stravaCard";

import Figmastats from "../components/figmastats";
import CurrentlyListening from "../components/currentlyListening";
import GithubMap from "../components/githubmap";
import Metric from "../components/metric";
import Boris from "../components/boris-stats";

import Highlights from "../components/Highlights/highlights";

const Dashboard = ({ data }) => (
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
        {/* <Figmastats /> */}

        <div className="metric">
          <div className="flex flex-center metric-header">
            <Image
              src="/github.svg"
              className="metric-logo"
              width={24}
              height={24}
              alt="npm"
            />
            <h6>Github contribution map</h6>
          </div>
          {/* <div className="flex space-between">
            <div className="metric-pill">
              <small>Repos</small>
              <Metric metric={data.user.repositories.totalCount} />
            </div>
            <div className="metric-pill">
              <small>PRs</small>
              <Metric metric={data.user.pullRequests.totalCount} />
            </div>
            <div className="metric-pill">
              <small>Contributions</small>
              <Metric
                metric={
                  data.user.contributionsCollection.contributionCalendar
                    .totalContributions
                }
              />
            </div>
            <div className="metric-pill">
              <small>Followers</small>
              <Metric metric={data.user.followers.totalCount} />
            </div>
          </div> */}
          <GithubMap />
        </div>
        {/* <Npmstats /> */}
        {/* <StravaStats /> */}
        <Highlights />
      </Main>
    </MainWrapper>
  </Motion>
);

export default Dashboard;
