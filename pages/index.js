import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";

const { APM_SERVER_URL: server_url, APM_SECRET_TOKEN: apm_token } = process.env;

// Add this to the VERY top of the first file loaded in your app
var apm = require("elastic-apm-node").start({
  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: "Boris & Casper Service name",

  // Use if APM Server requires a secret token
  secretToken: { apm_token },

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: { server_url },

  // Set the service environment
  environment: "production",
});

const Home = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Boris Kirov"
        description="Technical designer interested in systems, front-end, open source and collaborative design."
        image="https://www.boriskirov.me/main-meta-tag-image.png"
        name="Boris Kirov"
      />
      <Main>
        <h1 className="heading2Xl">Hi, I'm Boris </h1>
        <p>
          and I'm geting things done at{" "}
          <Link href="https://elastic.co">
            <a className="external" target="_blank">
              Elastic
            </a>
          </Link>
        </p>
        <div className="contentWrapper">
          <section>
            <ul>
              <li className="blog">
                <Link href="/about" as="/about">
                  <a className="internalPassage">About</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/playground" as="/playground">
                  <a className="internalPassage">Playground</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/writings" as="/writings">
                  <a className="internalPassage">Writings</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/photography" as="/photography">
                  <a className="internalPassage">Photography</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Home;
