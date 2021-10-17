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
        <Metadata title="Writings - " />
        <Main>
          <Link href="/">
            <a className="backButton">Back</a>
          </Link>
          <h1 className="heading2Xl">WRITINGS</h1>
          <p>
            My small space where I try to think out loud about everything
            related to design, software and technology.
          </p>

          {/* Add this <section> tag below the existing <section> tag */}

          {allPostsData.map(({ id, type, title }) => (
            <a className="mainCard" key={id}>
              <Link href={`/posts/${id}`}>
                <h6 className="headingL">{title}</h6>
              </Link>
              <small>{type}</small>
            </a>
          ))}

          {/* Add this <section> tag below the existing <section> tag */}

          <div className="contentWrapper">
            <Link href="/writings/the-history-of-the-browser">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">The history of the browser</h6>
                </div>
                <small>Article</small>
              </a>
            </Link>

            <Link href="/writings/defining-design-systems">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">Defining design system</h6>
                </div>
                <small>Article</small>
              </a>
            </Link>

            <Link href="/writings/great-wall-of-development">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">Wall of development</h6>
                </div>
                <small>Case study</small>
              </a>
            </Link>

            <Link href="/writings/tripscout">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">Working with TripScout</h6>
                </div>
                <small>Case study</small>
              </a>
            </Link>

            <Link href="/writings/nda">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">
                    Implementing design system thinking
                  </h6>
                </div>
                <small>Case study</small>
              </a>
            </Link>

            <Link href="/writings/improve-impatience">
              <a className="mainCard">
                <div>
                  <h6 className="headingL">Improving Impatience</h6>
                </div>
                <small>Article</small>
              </a>
            </Link>
          </div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
