import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import Main from "../components/innerWrapper";

import MainWrapper from "../components/mainWrapper";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox, PagingInfo } from "@elastic/react-search-ui";

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
      // 1. Search by title of document.
      title: {},
      body_content: {},
    },
    // 2. Results: title of the document, with body content and url addded.
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
          size: 240,
          fallback: true,
        },
      },
      url: {
        raw: {},
      },
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
          image="https://www.boriskirov.me/meta-tag-search.png"
          name="Boris Kirov"
        />
        <Main>
          <Link href="/playground">
            <a className="backButton">Back</a>
          </Link>

          <h1 className="heading2Xl">SEARCH</h1>
          <p>
            Experimental page to experience how a basic search through documents
            on my web app would allow for faster navigation. The search is build
            with Elastic App Search and Elastic Search UI.
          </p>
          <SearchProvider config={configurationOptions}>
            <SearchBox inputProps={{ placeholder: "Search for something" }}/>
            <PagingInfo />
            <Results titleField="title" urlField="url" />
          </SearchProvider>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
