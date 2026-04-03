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
            {boris.profession} •{" "}
            <Link
              href="https://boriskirov.photos"
              className="external"
              target="_blank"
            >
              Photographer
            </Link>{" "}
            • Visual Storyteller • Technologist • Speaker <br />I live in
            Amsterdam, and currently getting things done at{" "}
            <Link
              href="https://elastic.co"
              className="external"
              target="_blank"
            >
              {boris.experience[0].company}
            </Link>
            .
            <br />
            <br />
            <i>* Always remotely.</i>
          </p>
        </div>
        {/* <HomePageFooter /> */}
      </MainWrapper>
    </Motion>
  );
}
