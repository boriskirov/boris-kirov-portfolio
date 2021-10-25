import Head from "next/head";

const Metadata = ({ title, description, image, name }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={name} />
      <meta
        name="theme-color"
        content="currentColor"
        media="(prefers-color-scheme: dark)"
      />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="Boris Kirov - Product designer" />
      <meta property="og:url" content="https://www.boriskirov.me" />
      <meta name="image" property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sboriskirov" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@sboriskirov" />
      <meta name="twitter:image:src" content={image} />
    </Head>
  );
};
export default Metadata;
