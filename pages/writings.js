import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";

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
            {/* Add this <section> tag below the existing <section> tag */}

            {allPostsData.map(({ id, type, description, title }) => (
              <Link href={`/posts/${id}`}>
                <a className="mainCard" key={id}>
                  <h6 className="headingL">{title}</h6>
                  <small>{description}</small>
                  <small>{type}</small>
                </a>
              </Link>
            ))}

            {/* Add this <section> tag below the existing <section> tag */}
          </div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
