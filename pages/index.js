import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import { useState, useEffect } from "react";

import Header from "../components/header";

import MainWrapper from "../components/mainWrapper";
import boris from "../public/boris.json";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Boris Kirov"
          description="Technical designer interested in systems, front-end, open source and collaborative design."
          image="https://www.boriskirov.me/main-meta-tag-image.png"
          name="Boris Kirov"
        />

        {!isMobile && <Header />}
        <div className="index-body-container" style={{ maxWidth: "672px" }}>
          <h1 className="heading2Xl">
            {boris.firstName} {""} {boris.familyName}
          </h1>
          <p>
            {boris.profession}. Demonstrating the value of design by getting
            things done at{" "}
            <Link
              href="https://elastic.co"
              className="external"
              target="_blank"
            >
              {boris.experience[0].company}
            </Link>
            . Previously at{" "}
            <Link href="https://miro.com" className="external" target="_blank">
              {boris.experience[1].company}.
            </Link>{" "}
            Always remotely.
          </p>
        </div>
        {/* <HomePageFooter /> */}
      </MainWrapper>
    </Motion>
  );
}
