import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/headata";
import Link from "next/link";
import Header from "../components/header";

function Miro() {
  return (
    <>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: [25, 1],
          opacity: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="mainWrapper">
          <HeadData />

          <Header />

          <main className="innerWrapper">
            <Link href="/">
              <a className="backButton">Back</a>
            </Link>
            <div className="flex">
              <img
                className="stackCardImg"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fmiro_3781_logo_1598617687_dsfet.png&f=1&nofb=1"
              />
            </div>
            <p>
              Miro is a leading collaborative whiteboarding solution. Where
              distributed teams get work done. Together, online. The work that's
              listed below was done in close collaboration with my fellow
              Mironeers.{" "}
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
                  <h2>Design system</h2>

                  <li className="listStyleCircle">Grower and advocate</li>
                  <li className="listStyleCircle">
                    Ways of working, contribution models and stream
                    collaboration processes
                  </li>
                  <li className="listStyleCircle">Onboarding members</li>
                  <li className="listStyleCircle">
                    Collaborate and contribute with production-ready code
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Accessibility</h2>

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
                  <li className="listStyleCircle">
                    Collaborate and contribute with production-ready code
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Developer Experience</h2>
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
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Application Experience</h2>

                  <li className="listStyleCircle">
                    Installation & Authorization logic
                  </li>
                  <li className="listStyleCircle">App submission & reviews</li>
                  <li className="listStyleCircle">Enterprise app experience</li>
                </ul>
              </li>
              <li>
                <ul>
                  <h2>Side projects</h2>
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
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default Miro;
