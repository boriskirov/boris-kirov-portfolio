import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Image from "next/image";

const Error = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="404"
        description="Sorry, this page does not exists, but you can check my Playground."
        image="https://www.boriskirov.me/meta-tag-404.png"
        name="Boris Kirov"
      />
      <Main>
        <div className="flex error">
          <Image src="/sad-mac.svg" alt="404" width={112} height={112} />

          <h1 className="heading2Xl">404</h1>

          <p>
            Sorry, this page does not exists, but you can check my{" "}
            <Link href="/playground" as="/playground">
              <a className="internalPassage">Playground</a>
            </Link>{" "}
          </p>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Error;
