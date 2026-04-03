import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  SearchProvider,
  Results,
  SearchBox,
  PagingInfo,
} from "@elastic/react-search-ui";

const searchKey =
  process.env.NEXT_PUBLIC_APP_SEARCH_KEY || process.env.APP_SEARCH_KEY;
const engineName =
  process.env.NEXT_PUBLIC_APP_SEARCH_ENGINE_NAME ||
  process.env.APP_SEARCH_ENGINE_NAME;
const endpointBase =
  process.env.NEXT_PUBLIC_APP_SEARCH_ENDPOINT_BASE ||
  process.env.APP_SEARCH_ENDPOINT_BASE;

export default function SearchApp() {
  if (!searchKey || !engineName || !endpointBase) {
    return null;
  }

  const connector = new AppSearchAPIConnector({
    searchKey,
    engineName,
    endpointBase,
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

  return (
    <SearchProvider config={configurationOptions}>
      <SearchBox
        inputProps={{ placeholder: "Search for something", autoFocus: "on" }}
      />
      <PagingInfo />
      <Results titleField="title" urlField="url" />
    </SearchProvider>
  );
}
