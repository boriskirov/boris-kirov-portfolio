import React from "react";

import Motion from "../../components/motion";
import Metadata from "../../components/metadata";
import Link from "next/link";
import Image from "next/image";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import StravaStats from "../../components/stravaCard";
import boris from "../../public/boris.json";
import Npmstats from "../../components/npmstats";
import Figmastats from "../../components/figmastats";
import CurrentlyListening from "../../components/currentlyListening";

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
        title="Glossary"
        description="This is my personal resource that lists the methods, practices and ways of working I follow in design."
        image="https://www.boriskirov.me/meta-tag-glossary.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground" className="backButton">
          Back
        </Link>
        <h1 className="heading2Xl">DASHBOARD</h1>
        <p>
          This is my personal dashboard with metrics and statistics from
          different platforms and tools. The goal of this dashboard is to
          display and visualise performance and involvement in various projects
          during my career.
        </p>
        <Image
          src="/under-construction.gif"
          alt="Under construction"
          width={640}
          height={32}
        />
        {/* <div>
          <p>
            {boris.firstName} {""}
            {boris.familyName} {""}
            {boris.profession} {""}
            {boris.location.city}
          </p>

          <Npmstats />

          <Figmastats />
          <CurrentlyListening />

          <div className="ApiCard">
            <div className="flex">
              <Image
                src="/github.png"
                className="stack-card-img"
                width={48}
                height={48}
                alt="npm"
              />
              <small className="npm-downloads">
                {
                  data.user.contributionsCollection.contributionCalendar
                    .totalContributions
                }
                {""} contributions this year
              </small>
              <small className="npm-downloads">
                {" "}
                {data.user.repositories.totalCount} repos
              </small>
              <small className="npm-downloads">
                {data.user.followers.totalCount} followers
              </small>
            </div>
          </div>
          <StravaStats />
        </div> */}
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
