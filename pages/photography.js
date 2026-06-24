import Link from "next/link";

import Page from "../components/Page";

export default function Photography() {
  return (
    <Page
      title="Photography"
      description="My small visual space for photography and prints."
      image="https://www.boriskirov.me/meta-tag-photography.png"
    >
      <Link href="/" className="backButton">
        Back
      </Link>

      <h1 className="heading2Xl">PHOTOGRAPHY</h1>
      <p>
        I've been doing photography, videography and mixed media for 10 years.
        As a mixed media specialiast I've worked with different clients to
        execute unique and interesting projects for products, events, services
        and travel destinations. Worked with clients like:{" "}
        <a src="https://www.facebook.com/media/set/?set=a.10156824008432401&type=3">
          FITC Amsterdam
        </a>
        , <a src="https://teahousesofia.com/shop">Tea House Sofia</a>,
        <a src="www.despark.com"> Despark</a> and many others.
      </p>
      <blockquote>
        For more of my proffesional and personal work feel free to browse and DM
        me on{" "}
        <Link
          href="https://www.instagram.com/yng.blds/"
          className="external"
          target="_blank"
        >
          Instagram
        </Link>
        📩.
      </blockquote>
      <h5>Gallery</h5>
      <div className="flex">
        <video controls width="340" src="historic-reel-1.mov"></video>
        <video controls width="340" src="historic-reel-1.3.mov"></video>
      </div>
      <div className="flex">
        <video controls width="340" src="zoomshroom2333.mov"></video>
        <video controls width="340" src="canuatutrecht.mov"></video>
      </div>
      <div className="flex">
        <video controls width="340" src="florence.mov"></video>
        <video controls width="340" src="madzha.mov"></video>
      </div>
    </Page>
  );
}
