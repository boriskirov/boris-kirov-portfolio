import Head from "next/head";
import { useRouter } from "next/router";
import boris from "../public/boris.json";

const fullName = `${boris.firstName} ${boris.familyName}`;
const siteName = `${fullName} — ${boris.profession}`;

/**
 * Metadata — <Head> injector for every page.
 *
 * Props
 *   - title       Page title (required).
 *   - description Meta / OG / Twitter description (defaults to `boris.metaDescription`).
 *   - image       Path-only ("/foo.png") OR absolute URL. If path-only, the
 *                 canonical site domain (`boris.website`) is prepended so OG
 *                 crawlers see an absolute URL.
 *   - name        Author name (defaults to full name from boris.json).
 */
const Metadata = ({
  title,
  description = boris.metaDescription,
  image,
  name = fullName,
}) => {
  const router = useRouter();
  const url = `${boris.website}${router.asPath}`;
  const absoluteImage =
    image && !/^https?:\/\//.test(image) ? `${boris.website}${image}` : image;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={name} />
      <meta name="theme-color" content="#131313" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={boris.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={boris.social.twitter} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
    </Head>
  );
};

export default Metadata;
