import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";

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
        <div>
          <h1 className="heading2Xl">Boris Kirov</h1>
          <p>
            Building polished software and experiences in the digital world. I
            love experimenting and developing tools and products. Currently a UX
            engineer at {""}
            <Link href="https://elastic.co">
              <a className="external" target="_blank">
                Elastic
              </a>
            </Link>
            .
          </p>
          <p>
            My previous experience was as the first Platform and system designer
            in{" "}
            <Link href="https://elastic.co">
              <a className="external" target="_blank">
                Miro
              </a>
            </Link>
            , the Whiteboard Platform, where I was mainly focusing on building
            the developer experience and tooling.
          </p>
          <p>
            Before that I used to work with clients like Disney, BNP Paribas,
            Graydon & Tripscout.{" "}
            <Link href="https://elastic.co">
              <a className="external" target="_blank">
                Read more.
              </a>
            </Link>
          </p>
        </div>
        <div>
          <h4>Work</h4>
          <ul>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Elastic
                </a>
              </Link>
              <span> --------------------- </span>
              <strong> 2022 -</strong>
            </li>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Miro
                </a>
              </Link>
              <span> --------------------- </span>
              <strong> 2020 - 2022</strong>
            </li>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  INFO
                </a>
              </Link>
              <span> --------------------- </span>
              <strong> 2019 - 2020</strong>
            </li>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Despark
                </a>
              </Link>
              <span> --------------------- </span>
              <strong> 2016 - 2019</strong>
            </li>
          </ul>
        </div>
        <div>
          <h4>Writing</h4>
          <ul>
            <li>
              <strong>Life at Miro</strong>
              <p>
                Working as a leading platform designer for Miro on topics like
                frameworks, core, developer experience, app experience and
                design system & accesibility during their hypergrowht of
                2020-2022.
              </p>
            </li>
            <li>
              {" "}
              <strong>Internal tools and methods for gaining empathy</strong>
              <p>
                Through this case study blog post I'll guide you through the
                internal tools and methods you can use, to feed your ideas with
                qualitative and quantitative backup.
              </p>
            </li>
            <li>
              <strong>The history of the browser</strong>
              <p>
                The web browser today is an amazingly powerful piece of
                software, limiting in its own ways but still powerful enough to
                bear things like progressive apps, this post is trying to
                understand how did it came to that point and why.
              </p>
            </li>
            <li>
              <strong>Implementing system thinking</strong>
              <p>
                Case study story of the experience being a single designer in a
                developer focused product about media analysis and annotations.
              </p>
            </li>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  All posts
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Building</h4>
          <ul>
            <li>
              <strong>Searching with Elastic</strong>{" "}
              <span className="tag">Experiment</span>
            </li>
            <li>
              <strong>Mirotone</strong> <span className="tag">Library</span>
            </li>
            <li>
              <strong>Mirotone</strong>{" "}
              <span className="tag">Figma plugin</span>
            </li>
            <li>
              <strong>Fluiditype</strong> <span className="tag">Library</span>
            </li>
            <li>
              <strong>Fluidigrid</strong> <span className="tag">Library</span>
            </li>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  All projects
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Documenting</h4>
          <ul>
            <li>Glossary</li>
            <li>Toolbox</li>
            <li>Cheatsheets</li>
          </ul>
        </div>
        <div>
          <h4>Speaking</h4>
          <ul>
            <li>Designing for developers</li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <p>If you are around Amsterdam feel free to reach out for a walk.</p>
          <ul>
            <li>
              {" "}
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Twitter
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Github
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://elastic.co">
                <a className="external" target="_blank">
                  Figma
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="contentWrapper">
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
                <Link href="/talks" as="/talks">
                  <a className="internalPassage">Talks</a>
                </Link>
              </li>
              <li className="blog">
                <Link href="/photography" as="/photography">
                  <a className="internalPassage">Photography</a>
                </Link>
              </li>
            </ul>
          </section>
        </div> */}
      </Main>
    </MainWrapper>
  </Motion>
);

export default Home;
