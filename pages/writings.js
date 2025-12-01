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
import Glow from "../components/glow";
import ComputeParticles from "../components/ComputeParticles";

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
        <div className="contentWrapper dot-grid">
          {/* <Glow /> */}
          <ComputeParticles />
          {/* <h4>Writings</h4>
            <p>
              My small space where I try to think out loud about everything
              related to design, software and technology. You'll find case
              studies, tutorials and blog posts here.
            </p> */}
          {/* {allPostsData.map(({ id, type, description, title }) => (
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
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                gap: "1rem",
              }}
            >
              {allCasesData.map(({ id, type, description, title }) => (
                <Card
                  key={id}
                  link={`/cases/${id}`}
                  className="main-card"
                  title={title}
                  description={description}
                  type={type}
                  target=""
                />
              ))}
            </div>

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
            ))} */}
        </div>
      </MainWrapper>
    </Motion>
  );
}
