import React from "react";
import Motion from "../../components/motion";
import MainWrapper from "../../components/mainWrapper";
import Metadata from "../../components/metadata";
import Main from "../../components/innerWrapper";
import Link from "next/link";

const Toolbox = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Toolbox"
        description="List of tools & software I use daily to support my interest and hunger on the journey of designing software."
        image="../../meta-tag-toolbox.png"
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
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fmiro_3781_logo_1598617687_dsfet.png&f=1&nofb=1"
                />
                <h6 className="headingM">Miro</h6>
              </div>
              <small>Collaboration</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.greggant.com%2Fimages%2Fposts%2F2019-04-25-figma%2FFigma.png&f=1&nofb=1"
                />
                <h6 className="headingM">Figma</h6>
              </div>
              <small>Design</small>
            </a>

            <a
              className="stackCard"
              href="https://1.1.1.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cmweMihg1GXvxey6ghALwgAAAA%26pid%3DApi&f=1"
                />
                <h6 className="headingM">1.1.1.1</h6>
              </div>
              <small>Security</small>
            </a>

            <a
              className="stackCard"
              href="https://culturedcode.com/things/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzenkit.com%2Fwp-content%2Fuploads%2F2020%2F08%2FThings-App-Icon-Logo.png&f=1&nofb=1"
                />
                <h6 className="headingM">Things</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.notion.so/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F06%2FNotion_App_Logo.png&f=1&nofb=1"
                />
                <h6 className="headingM">Notion</h6>
              </div>
              <small>Writing</small>
            </a>

            <a
              className="stackCard"
              href="https://www.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcollegian.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fspotify-1759471_1280.jpg&f=1&nofb=1"
                />
                <h6 className="headingM">Spotify</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.techspot.com%2Fimages2%2Fdownloads%2Ftopdownload%2F2021%2F04%2F2021-04-07-ts3_thumbs-8ba.png&f=1&nofb=1"
                />
                <h6 className="headingM">Github</h6>
              </div>
              <small>Collaboration</small>
            </a>

            <a
              className="stackCard"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.underconsideration.com%2Fbrandnew%2Farchives%2Fvsco_core_elements_03.png&f=1&nofb=1"
                />
                <h6 className="headingM">VSCO</h6>
              </div>
              <small>Design</small>
            </a>

            <a
              className="stackCard"
              href="https://blockbear.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F1f%2Faf%2F7f%2F1faf7f9f-216a-dde1-00c5-6be33a4ae542%2Fsource%2F512x512bb.jpg&f=1&nofb=1"
                />
                <h6 className="headingM">BlockBear</h6>
              </div>
              <small>Security</small>
            </a>

            <a
              className="stackCard"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F06%2FTwitter-Logo.png&f=1&nofb=1"
                />
                <h6 className="headingM">Twitter</h6>
              </div>
              <small>Communication</small>
            </a>

            <a
              className="stackCard"
              href="https://dependabot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F27347476%3Fs%3D200%26v%3D4&f=1&nofb=1"
                />
                <h6 className="headingM">Dependabot</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkeycombiner.com%2Fmedia%2Fapplication-icons%2Fobsidian.png&f=1&nofb=1"
                />
                <h6 className="headingM">Obsidian</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.loom.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.loom.com%2Fassets%2Fsso%2Floom_logo.png&f=1&nofb=1"
                />
                <h6 className="headingM">Loom</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asapdevelopers.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fnext_js.png&f=1&nofb=1"
                />
                <h6 className="headingM">Next.js</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saasworthy.com%2Fvercel_7966_logo_1591610946_s90wa.png&f=1&nofb=1"
                />
                <h6 className="headingM">Vercel</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://sparkmailapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2F9o9FmYPsy8REvZUilcL1By0-iEY%3D%2F768x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FSP-App-Icon-Final-56a28a495f9b58b7d0cbec75.png&f=1&nofb=1"
                />
                <h6 className="headingM">Spark</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://support.apple.com/guide/terminal/welcome/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://help.apple.com/assets/5FDD15EE12A93C067904695E/5FDD15F412A93C0679046966/en_US/d94aa1c4979b25e9ffbda97fcbae219a.png"
                />
                <h6 className="headingM">Terminal</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.softzone.es%2Fapp%2Fuploads%2F2017%2F05%2FLogo-Microsoft-Visual-Studio-Code.png&f=1&nofb=1"
                />
                <h6 className="headingM">VScode</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://www.mozilla.org/en-US/firefox/developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F569-5692283_firefox-developer-edition-logo-hd-png-download.png&f=1&nofb=1"
                />
                <h6 className="headingM">Firefox Dev Edition</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.google.com/chrome/canary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redeszone.net%2Fapp%2Fuploads%2F2017%2F04%2FLogo-Google-Chrome-Canary.png&f=1&nofb=1"
                />
                <h6 className="headingM">Google Chrome Canary</h6>
              </div>
              <small>Development</small>
            </a>

            <a
              className="stackCard"
              href="https://protonmail.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bitcoinx.com%2Fwp-content%2Fuploads%2F2014%2F07%2FPhotonMail.png&f=1&nofb=1"
                />
                <h6 className="headingM">Protonmail</h6>
              </div>
              <small>Security</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              href="https://www.mozilla.org/en-US/firefox/lockwise/"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.mozilla.org%2Ffirefox%2Ffiles%2F2019%2F07%2FLockwise-Logo.png&f=1&nofb=1"
                />
                <h6 className="headingM">Lockwise</h6>
              </div>
              <small>Security</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              href="https://muzzleapp.com/"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.macupdate.com%2Fproducts%2F59729%2Fm%2Fmuzzle-logo.png%3Fv%3D1568337187&f=1&nofb=1"
                />
                <h6 className="headingM">Muzzle</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              href="https://getkap.co/"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.electronjs.org%2Fimages%2Fapp-img%2Fkap%2Fkap-icon-128.c58588670646bfcd6b63f2b00b20b855.png&f=1&nofb=1"
                />
                <h6 className="headingM">Kap</h6>
              </div>
              <small>Productivity</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              href="https://duckduckgo.com/"
            >
              <div>
                <img
                  className="stackCardImg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple113%2Fv4%2Ffe%2F1b%2F81%2Ffe1b8145-46b7-7abd-e5c5-56fe424d3eca%2Fsource%2F1000x1000bb.jpg&f=1&nofb=1"
                />
                <h6 className="headingM">DuckDuckGo</h6>
              </div>
              <small>Security</small>
            </a>

            <a
              className="stackCard"
              href="https://www.figma.com"
              target="_blank"
              href="https://www.raycast.com/"
            >
              <div>
                <img className="stackCardImg" src="/raycast.png" />
                <h6 className="headingM">Raycast</h6>
              </div>
              <small>Productivity</small>
            </a>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Toolbox;
