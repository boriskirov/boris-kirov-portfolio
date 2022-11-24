import React from "react";

import Motion from "../../components/motion";
import Metadata from "../../components/metadata";
import Link from "next/link";
import Image from "next/image";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";

const Dashboard = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Glossary"
        description="This is my personal resource that lists the methods, practices and ways of working I follow in design."
        image="https://www.boriskirov.me/meta-tag-glossary.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground" className="backButton">
          Back
        </Link>
        <h1 className="heading2Xl">DASHBOARD</h1>
        <p>
          This is my personal dashboard with metrics and statistics from
          different platforms and tools. The goal of this dashboard is to
          display and visualise performance and involvement in various projects
          during my career.
        </p>
        <Image
          src="/under-construction.gif"
          alt="Under construction"
          width={1440}
          height={96}
        />
        {/* <Npmstats />
        <GitStats /> */}
      </Main>
    </MainWrapper>
  </Motion>
);

export default Dashboard;
