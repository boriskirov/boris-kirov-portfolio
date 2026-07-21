import Link from "next/link";
import Image from "next/image";

import Page from "../components/Page";

const NotFound = () => (
  <Page
    title="404"
    description="Sorry, this page does not exists, but you can check my Playground."
    image="https://www.boriskirov.me/meta-tag-404.png"
  >
    <div className="flex error">
      <Image src="/sad-mac.svg" alt="404" width={248} height={248} />
      <h1>404</h1>
      <p>
        Sorry, this page doesn't exist, but you can check my{" "}
        <Link href="/playground" as="/playground" className="cursor-forward">
          Playground
        </Link>
        .{" "}
      </p>
    </div>
  </Page>
);

export default NotFound;
