import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Image from "next/image";

const Miro = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Miro"
        description="The things I am getting done in Miro."
        image="https://www.boriskirov.me/meta-tag-miro.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <div className="flex">
          <Image
            className="stack-card-img"
            src="/miro.png"
            alt="Miro logo"
            width={48}
            height={48}
          />
        </div>
        <p>
          Miro is a leading collaborative whiteboarding solution. Where
          distributed teams get work done. Together, online. The work that's
          listed below was done in close collaboration with my fellow Mironeers.{" "}
          <a
            href="https://www.miro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Miro
          </a>
        </p>

        <ul>
          <li className="list-style-none list-style">
            <ul>
              <h6>Platform Experience</h6>
              <p>
                As a core member of the Platform stream in Miro I care deeply
                about Developer Experience, App Experience, API & SDK
                Experience. Listed below you can see some of the honorable
                mentions where I collaborate and contribute to.
              </p>
              <a
                href="/platform-adoption-framework.png"
                rel="noopener noreferrer"
                className="zoom-in"
              >
                <Image
                  src="/platform-adoption-framework.png"
                  alt="Picture of the author"
                  width="1080"
                  height="640"
                />
              </a>
            </ul>
          </li>

          <li className="list-style-none list-style">
            <ul>
              <h6>Design system & Accessibility</h6>
              <p>
                System design is something I always find interesting and
                challenging because of the multilayer complexity it gives to the
                design discipline. Design system in miro started as a initiative
                and grew to a way of working. This topology diagram is trying to
                communicate a vision of how a design system can fit in the
                organisational structure in product development.
              </p>
              <a
                href="/desing-system-topology-diagram.png"
                rel="noopener noreferrer"
                className="zoom-in"
              >
                <Image
                  src="/desing-system-topology-diagram.png"
                  alt="Picture of the author"
                  width="1080"
                  height="640"
                />
              </a>
            </ul>
          </li>

          <li className="list-style-none list-style">
            <ul>
              <h6>Side projects</h6>
              <p>
                I like exploring the area and the product in depth, what I
                really love out of it is the journey where you learn and you
                also contribute to the bigger purpose. Some of the sideprojects
                became actual iniatiaves and projects and this makes me so
                happy.
              </p>
              <li className="list-style-circle">
                <a
                  href="https://miroshortcuts.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miro Shortcuts
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Miro;
