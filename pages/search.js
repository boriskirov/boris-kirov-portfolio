import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";

const connector = new AppSearchAPIConnector({
  searchKey: "",
  engineName: "boriskirov",
  endpointBase: "",
  cacheResponses: false,
});
const configurationOptions = {
  apiConnector: connector,
  searchQuery: {
    search_fields: {
      // 1. Search by name of video game.
      title: {},
      body_content: {},
    },
    // 2. Results: name of the video game, its genre, publisher, scores, and platform.
    result_fields: {
      title: {
        // A snippet means that matching search terms will be highlighted via <em> tags.
        snippet: {
          size: 75, // Limit the snippet to 75 characters.
          fallback: true, // Fallback to a "raw" result.
        },
      },
      body_content: {
        snippet: {
          size: 160,
          fallback: true,
        }
      },
      url: {
        raw: {}
      }
    },
  },
};
export default function App() {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Boris Kirov"
          description="Technical designer interested in systems, front-end, open source and collaborative design."
          image="https://www.boriskirov.me/main-meta-tag-image.png"
          name="Boris Kirov"
        />
        <Main>
          <SearchProvider config={configurationOptions}>
            <SearchBox />
            <Results titleField="title" urlField="url" />
          </SearchProvider>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
