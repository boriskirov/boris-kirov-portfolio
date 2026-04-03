## My personal website

This is the code that runs on [boriskirov.me](https://boriskirov.me), where I try to express myself about design, technology and software.

I've used those amazing tools for it:

- [NextJS](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Vercel](https://vercel.com/)

## Development

1. Clone the repository: `git clone git@github.com:boriskirov/boris-kirov-portfolio.git`
2. cd into the directory: `cd boris-kirov-portfolio`
3. Install dependencies: `npm install`
4. Fill in local environment variables in `.env.local`
5. Start the client: `npm run dev`
6. Open the site: `localhost:3000`

## Environment variables

The repo uses `.env.local` for local secrets and runtime config. A tracked example is available in `.env.example`.

- `GITHUB_TOKEN`: enables the richer GitHub dashboard activity feed, including direct commits on default branches
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement id used in the client app
- `NEXT_PUBLIC_APP_SEARCH_KEY`, `NEXT_PUBLIC_APP_SEARCH_ENGINE_NAME`, `NEXT_PUBLIC_APP_SEARCH_ENDPOINT_BASE`: Elastic App Search client config used by the search UI
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`: Spotify API credentials
- `STRAVA_CLIENT_ID`, `STRAVA_SECRET`, `STRAVA_REFRESH_TOKEN`: Strava API credentials
