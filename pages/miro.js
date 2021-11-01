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
            className="stackCardImg"
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
          <li>
            <ul>
              <h5>Platform Experience</h5>
              <li className="listStyleCircle">
                <a
                  href="https://developers.miro.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miro Developers
                </a>
              </li>
              <li className="listStyleCircle">
                <a
                  href="https://mirotone.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mirotone design system
                </a>
              </li>
              <li className="listStyleCircle">Getting started app</li>
              <li className="listStyleCircle">Your apps redesign</li>
              <li className="listStyleCircle">
                Developers comms template design
              </li>
              <li className="listStyleCircle">
                Installation & Authorization logic
              </li>
              <li className="listStyleCircle">App submission & reviews</li>
              <li className="listStyleCircle">Enterprise app experience</li>
            </ul>
          </li>
          <li>
            <ul>
              <h5>Design system & Accessibility</h5>

              <li className="listStyleCircle">Grower and advocate</li>
              <li className="listStyleCircle">
                Ways of working, contribution models and stream collaboration
                processes
              </li>
              <li className="listStyleCircle">Onboarding members</li>
              <li className="listStyleCircle">
                Collaborate and contribute with production-ready code
              </li>
              <li className="listStyleCircle">
                <a
                  href="https://miro.com/accessibility-statement/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miro Accessibility
                </a>
              </li>
              <li className="listStyleCircle">
                Design improvements based on the
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WCAG 2.1
                </a>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <h5>Side projects</h5>
              <li className="listStyleCircle">
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
