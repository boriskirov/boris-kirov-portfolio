// next.config.js - wrap your config withAxiom()
const { withAxiom } = require("next-axiom");

/* next.config.js  */
module.exports = withAxiom({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com",
    ],
  },
});
