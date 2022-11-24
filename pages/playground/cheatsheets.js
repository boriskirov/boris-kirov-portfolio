import React from "react";
import Motion from "../../components/motion";
import MainWrapper from "../../components/mainWrapper";
import Metadata from "../../components/metadata";
import Main from "../../components/innerWrapper";
import Link from "next/link";
import FeedbackForm from "../../components/feedbackForm";
import Cheatsheet from "../../components/Cheatsheet/cheatsheet";

const MyStack = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Cheatsheets"
        description="List of commands and shortcuts to keep my day fun and productive. "
        image="https://www.boriskirov.me/meta-tag-cheatsheets.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground" className="backButton">
          Back
        </Link>

        <h1 className="heading2Xl">CHEATSHEET</h1>
        <p>
          Working with speed and efficiency is essential when you spend your day
          designing and coding. This section of my website is dedicated to
          commands & shortcuts, so my day can be fun and productive.
        </p>
        <Cheatsheet />
        <FeedbackForm
          description={
            "You have some interesting and helpful to share? Send it my way on Twitter."
          }
        />
      </Main>
    </MainWrapper>
  </Motion>
);

export default MyStack;
