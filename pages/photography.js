import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Image from "next/image";

export default function Photography() {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Photography"
          description="My small visual space for photography and prints."
          image="https://www.boriskirov.me/meta-tag-photography.png"
          name="Boris Kirov"
        />
        <Main>
          <Link href="/" className="backButton">
            Back
          </Link>

          <h1 className="heading2Xl">PHOTOGRAPHY</h1>
          <p>
            Photography holds a very precious and important part in my life.
            Taking pictures and documenting our lives through visual
            storytelling allows us to save and transfer feelings and memories.
            I'll be curating some of my sincerest snaps, which will also be
            allowed for ordering as prints. Thanks for stopping by 👋.
          </p>
          <Image
            src="/under-construction.gif"
            alt="Under construction"
            width={640}
            height={32}
          />

          <div className="contentWrapper"></div>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
