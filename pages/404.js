import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";

const Error = () => (
  <Motion>
    <MainWrapper>
      <Metadata title="404" />
      <Main>
        <Link href="/playground">
          <a className="backButton">Back</a>
        </Link>

        <div className="notReadyWrapper">
          <h1 className="heading2XlNotReady">
            <pre>░░░░░▄▄▀▀▀▀▀▀▀▀▀▄▄░░░░░</pre>
            <pre>░░░░█░░░░░░░░░░░░░█░░░░</pre>
            <pre>░░░█░░░░░░░░░░▄▄▄░░█░░░</pre>
            <pre>░░░█░░▄▄▄░░▄░░███░░█░░░</pre>
            <pre>░░░▄█░▄░░░▀▀▀░░░▄░█▄░░░</pre>
            <pre>░░░█░░▀█▀█▀█▀█▀█▀░░█░░░</pre>
            <pre>░░░▄██▄▄▀▀▀▀▀▀▀▄▄██▄░░░</pre>
            <pre>░▄█░█▀▀█▀▀▀█▀▀▀█▀▀█░█▄░</pre>
          </h1>
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
