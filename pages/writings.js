import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";
import { Tab } from "@headlessui/react";

import { getSortedPostsData } from "../lib/posts";

import { getSortedCasesData } from "../lib/cases";
import { getSortedCodesData } from "../lib/codes";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCasesData = getSortedCasesData();
  const allCodesData = getSortedCodesData();
  return {
    props: {
      allPostsData,
      allCasesData,
      allCodesData,
    },
  };
}

export default function Writings({ allPostsData, allCasesData, allCodesData }) {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Writings"
          description="My small space where I try to think out loud about everything related to design, software and technology. You'll find case studies, tutorials and blog posts here."
          image="https://www.boriskirov.me/meta-tag-writings.png"
          name="Boris Kirov"
        />
        <Main>
          <Link href="/" className="backButton">
            Back
          </Link>
          <h1 className="heading2Xl">WRITINGS</h1>
          <p>
            My small space where I try to think out loud about everything
            related to design, software and technology. You'll find case
            studies, tutorials and blog posts here.
          </p>
          <div className="contentWrapper">
            <Tab.Group defaultIndex={0}>
              <Tab.List className="flex">
                <Tab className="button">Blog posts</Tab>
                <Tab className="button">Case studies</Tab>
                <Tab className="button">Code snippets</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {" "}
                  {/* Post component start */}
                  <Motion>
                    {allPostsData.map(({ id, type, description, title }) => (
                      <Card
                        key={Card.title}
                        link={`/posts/${id}`}
                        className="main-card"
                        title={title}
                        description={description}
                        type={type}
                        target=""
                      />
                    ))}
                  </Motion>
                  {/* Post component end */}
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  {/* Case studies component start */}
                  <Motion>
                    {allCasesData.map(({ id, type, description, title }) => (
                      <Card
                        key={Card.title}
                        link={`/cases/${id}`}
                        className="main-card"
                        title={title}
                        description={description}
                        type={type}
                        target=""
                      />
                    ))}
                  </Motion>
                  {/* Case studies component end */}
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  {/* Code snippets component start */}
                  <Motion>
                    {allCodesData.map(({ id, type, description, title }) => (
                      <Card
                        key={Card.title}
                        link={`/codes/${id}`}
                        className="main-card"
                        title={title}
                        description={description}
                        type={type}
                        target=""
                      />
                    ))}
                  </Motion>
                  {/* Code snippets component end */}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
