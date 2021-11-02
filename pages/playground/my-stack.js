import React from "react";
import Motion from "../../components/motion";
import MainWrapper from "../../components/mainWrapper";
import Metadata from "../../components/metadata";
import Main from "../../components/innerWrapper";
import Link from "next/link";
import Toolbox from "../../components/Toolbox/toolbox";

const MyStack = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Toolbox"
        description="List of tools & software I use daily to support my interest and hunger on the journey of designing software."
        image="https://www.boriskirov.me/meta-tag-toolbox.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground">
          <a className="backButton">Back</a>
        </Link>

        <h1 className="heading2Xl">TOOLBOX</h1>
        <p>
          List of tools & software I use daily to support my interest and hunger
          on the journey of designing software. The list can constantly change
          as I try to experiment with new solutions and methods.
        </p>
        <Toolbox />
      </Main>
    </MainWrapper>
  </Motion>
);

export default MyStack;
