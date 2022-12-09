import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Image from "next/image";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import StravaStats from "../components/stravaCard";
import boris from "../public/boris.json";
import Npmstats from "../components/npmstats";
import Figmastats from "../components/figmastats";
import CurrentlyListening from "../components/currentlyListening";
import GithubMap from "../components/githubmap";
import Metric from "../components/metric";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
        <Link href="/" className="backButton">
          Back
        </Link>
        <h1 className="heading2Xl">Dashboard</h1>
        <p>
          This is my personal dashboard with metrics and statistics from
          different platforms and tools.
        </p>
        <hr />
        <div className="metric">
          <div className="flex flex-center metric-header">
            <Image
              src={boris.avatar}
              className="avatar"
              width={24}
              height={24}
            />
            <h6>Personal details</h6>
          </div>
          <div className="flex space-between">
            <div className="metric-pill">
              <small>Name</small>
              <h6>
                {" "}
                {boris.firstName} {""}
                {boris.familyName}
              </h6>
            </div>
            <div className="metric-pill">
              <small>Profession</small>
              <h6>{boris.profession}</h6>
            </div>
            <div className="metric-pill">
              <small>Location</small>
              <h6> {boris.location.city}</h6>
            </div>
          </div>
        </div>
        <Figmastats />
        <div>
          <div className="metric">
            <div className="flex flex-center metric-header">
              <Image
                src="/github.svg"
                className="metric-logo"
                width={24}
                height={24}
                alt="npm"
              />
              <h6>Github stats in 2022</h6>
            </div>
            <div className="flex space-between">
              <div className="metric-pill">
                <small>Repos</small>
                <Metric metric={data.user.repositories.totalCount} />
              </div>
              <div className="metric-pill">
                <small>Pull requestes</small>
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
            </div>
            <GithubMap />
          </div>
          <Npmstats />
          <StravaStats />
          <CurrentlyListening />
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Dashboard;

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "boriskirov") {
          name
          company
          bio
          location
          createdAt
          repositories {
            totalCount
            totalDiskUsage
          }
          pullRequests {
            totalCount
          }
          repositoriesContributedTo {
            totalCount
          }
          followers {
            totalCount
          }
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}
