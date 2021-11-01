import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writings({ allPostsData }) {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Writings"
          description="My small space where I try to think out loud about everything related to design, software and technology."
          image="https://www.boriskirov.me/meta-tag-writings.png"
          name="Boris Kirov"
        />
        <Main>
          <Link href="/">
            <a className="backButton">Back</a>
          </Link>
          <h1 className="heading2Xl">WRITINGS</h1>
          <p>
            My small space where I try to think out loud about everything
            related to design, software and technology.
          </p>
          <div className="contentWrapper">
            {/* Post component start */}

            {allPostsData.map(({ id, type, description, title }) => (
              <Card
                key={Card.id}
                link={`/posts/${id}`}
                className="mainCard"
                title={title}
                description={description}
                type={type}
                target=""
              />
            ))}

            {/* Post component end */}
          </div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
