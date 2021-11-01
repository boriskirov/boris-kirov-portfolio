import React from "react";
import Motion from "../../components/motion";
import MainWrapper from "../../components/mainWrapper";
import Metadata from "../../components/metadata";
import Main from "../../components/innerWrapper";
import Link from "next/link";
import Image from "next/image";

const Toolbox = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Toolbox"
        description="List of tools & software I use daily to support my interest and hunger on the journey of designing software."
        image="https://www.boriskirov.me/meta-tag-toolbox.png"
        name="Boris Kirov"
      />
      <Main>
        <Link href="/playground">
          <a className="backButton">Back</a>
        </Link>

        <h1 className="heading2Xl">TOOLBOX</h1>
        <p>
          List of tools & software I use daily to support my interest and hunger
          on the journey of designing software. The list can constantly change
          as I try to experiment with new solutions and methods.
        </p>
        <div className="contentWrapper">
          <section>
            <a
              className="stackCard"
              href="https://miro.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  alt="Miro logo"
                  className="stackCardImg"
                  src="/miro.png"
                  width={48}
                  height={48}
                />
                <h6 className="headingM">Miro</h6>
              </div>
              <small className="tag">Collaboration</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Figma logo"
                  className="stackCardImg"
                  src="/figma.png"
                />
                <h6 className="headingM">Figma</h6>
              </div>
              <small className="tag">Design</small>
            </a>

            <a
              className="stackCard"
              href="https://1.1.1.1/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="1.1.1.1."
                  className="stackCardImg"
                  src="/1.png"
                />
                <h6 className="headingM">1.1.1.1</h6>
              </div>
              <small className="tag">Security</small>
            </a>

            <a
              className="stackCard"
              href="https://culturedcode.com/things/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Things logo"
                  className="stackCardImg"
                  src="/things.png"
                />
                <h6 className="headingM">Things</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.notion.so/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Notion logo"
                  className="stackCardImg"
                  src="/notion.png"
                />
                <h6 className="headingM">Notion</h6>
              </div>
              <small className="tag">Writing</small>
            </a>

            <a
              className="stackCard"
              href="https://www.spotify.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Spotify logo"
                  className="stackCardImg"
                  src="/sptoify.png"
                />
                <h6 className="headingM">Spotify</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Github logo"
                  className="stackCardImg"
                  src="/github.png"
                />
                <h6 className="headingM">Github</h6>
              </div>
              <small className="tag">Collaboration</small>
            </a>

            <a
              className="stackCard"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="VSCO logo"
                  className="stackCardImg"
                  src="/vsco.png"
                />
                <h6 className="headingM">VSCO</h6>
              </div>
              <small className="tag">Design</small>
            </a>

            <a
              className="stackCard"
              href="https://blockbear.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="BlockBear logo"
                  className="stackCardImg"
                  src="/bbear.png"
                />
                <h6 className="headingM">BlockBear</h6>
              </div>
              <small className="tag">Security</small>
            </a>

            <a
              className="stackCard"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Twitter logo"
                  className="stackCardImg"
                  src="/twitter.png"
                />
                <h6 className="headingM">Twitter</h6>
              </div>
              <small className="tag">Communication</small>
            </a>

            <a
              className="stackCard"
              href="https://dependabot.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Dependabot logo"
                  className="stackCardImg"
                  src="/dpdbot.png"
                />
                <h6 className="headingM">Dependabot</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://obsidian.md/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Obsidian logo"
                  className="stackCardImg"
                  src="/obsidian.png"
                />
                <h6 className="headingM">Obsidian</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.loom.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Loom logo"
                  className="stackCardImg"
                  src="/loom.png"
                />
                <h6 className="headingM">Loom</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="NextJS logo"
                  className="stackCardImg"
                  src="/nextjs.png"
                />
                <h6 className="headingM">Next.js</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Vercel logo"
                  className="stackCardImg"
                  src="/vercel.png"
                />
                <h6 className="headingM">Vercel</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://sparkmailapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Spark logo"
                  className="stackCardImg"
                  src="/spark.png"
                />
                <h6 className="headingM">Spark</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://support.apple.com/guide/terminal/welcome/mac"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Terminal"
                  className="stackCardImg"
                  src="/terminal.png"
                />
                <h6 className="headingM">Terminal</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="VScode logo"
                  className="stackCardImg"
                  src="/vscode.png"
                />
                <h6 className="headingM">VScode</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://www.mozilla.org/en-US/firefox/developer/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Firefox Dev Logo"
                  className="stackCardImg"
                  src="/firefox-dev.png"
                />
                <h6 className="headingM">Firefox Dev Edition</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.google.com/chrome/canary/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Google Chrome Canary logo"
                  className="stackCardImg"
                  src="/ggc.png"
                />
                <h6 className="headingM">Google Chrome Canary</h6>
              </div>
              <small className="tag">Development</small>
            </a>

            <a
              className="stackCard"
              href="https://protonmail.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Protonmail logo"
                  className="stackCardImg"
                  src="/proton.png"
                />
                <h6 className="headingM">Protonmail</h6>
              </div>
              <small className="tag">Security</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://www.mozilla.org/en-US/firefox/lockwise/"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Lockwise logo"
                  className="stackCardImg"
                  src="/lockwise.png"
                />
                <h6 className="headingM">Lockwise</h6>
              </div>
              <small className="tag">Security</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://muzzleapp.com/"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Muzzle logo"
                  className="stackCardImg"
                  src="/muzzle.png"
                />
                <h6 className="headingM">Muzzle</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://getkap.co/"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Kap Logo"
                  className="stackCardImg"
                  src="/kap.png"
                />
                <h6 className="headingM">Kap</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://duckduckgo.com/"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="DuckDuckGo logo"
                  className="stackCardImg"
                  src="/ddg.png"
                />
                <h6 className="headingM">DuckDuckGo</h6>
              </div>
              <small className="tag">Security</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://www.raycast.com/"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  alt="Raycast logo"
                  className="stackCardImg"
                  src="/raycast.png"
                />
                <h6 className="headingM">Raycast</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>

            <a
              className="stackCard"
              target="_blank"
              rel="noreferrer"
              href="https://cleanshot.com"
            >
              <div>
                <Image
                  width={48}
                  height={48}
                  className="stackCardImg"
                  src="/clearshot.png"
                  alt="CleanShot logo"
                />
                <h6 className="headingM">CleanShot</h6>
              </div>
              <small className="tag">Productivity</small>
            </a>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Toolbox;
