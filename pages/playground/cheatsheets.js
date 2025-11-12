import React from "react";
import Motion from "../../components/motion";
import MainWrapper from "../../components/mainWrapper";
import Metadata from "../../components/metadata";
import Main from "../../components/innerWrapper";

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
        <h1 className="heading2Xl">Cheatsheets</h1>
        <p>
          Working with speed and efficiency is essential when you spend your day
          designing and coding. This section of my website is dedicated to
          commands & shortcuts, so my day can be fun and productive.
        </p>
        <Cheatsheet />
      </Main>
    </MainWrapper>
  </Motion>
);

export default MyStack;
