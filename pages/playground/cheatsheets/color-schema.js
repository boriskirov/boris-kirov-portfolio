import Link from "next/link";

import Page from "../../../components/Page";
import Colors from "../../../components/Colorschema/ColorPalette";

const ColorPalette = () => (
  <Page
    title="Color Schema"
    description="My personal color schema for creating visual schemas and architecture, inspired by the P3 color space. Feel free to explore and use it."
    image="https://www.boriskirov.me/meta-tag-color-palette.png"
  >
    <h1 className="heading2Xl">Color schema</h1>
    <p>
      My personal color schema for creating visual schemas and architecture,
      inspired by the P3 color space.
    </p>
    <p>
      You can either copy each of the colors from the palette below or get them
      for your projects via:
    </p>
    <ul>
      <li>
        <Link
          href="https://gist.github.com/boriskirov/8f146a2ea71dc3f6502e720cc7f24ca8"
          target="_blank"
        >
          Github Gist
        </Link>
      </li>
      <li>
        <Link href="/../../color-palette.svg" target="_blank">
          SVG string
        </Link>{" "}
        which you can paste in Figma for example
      </li>
    </ul>

    <Colors />
    <div id="snackbar">Copied</div>
  </Page>
);

export default ColorPalette;
