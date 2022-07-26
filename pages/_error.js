import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Image from "next/image";

function Error({ statusCode }) {
  return (
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
            <Image src="/sad-mac.svg" alt="404" width={124} height={124} />

            <p>
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
            </p>
          </div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
