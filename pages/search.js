import React from "react";
import Motion from "../components/motion";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  SearchProvider,
  Results,
  SearchBox,
  PagingInfo,
} from "@elastic/react-search-ui";

const connector = new AppSearchAPIConnector({
  searchKey: "search-jegb4yy85giwe3bssadnvu7r",
  engineName: "boriskirov-me",
  endpointBase: "https://boriskirov.ent.europe-west4.gcp.elastic-cloud.com",
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
export default function SearchApp() {
  return (
    <div>
      <SearchProvider config={configurationOptions}>
        <SearchBox inputProps={{ placeholder: "Search for something" }} />
        <PagingInfo />
        <Results titleField="title" urlField="url" />
      </SearchProvider>
    </div>
  );
}
