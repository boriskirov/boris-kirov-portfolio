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

const searchConfig = {
  searchQuery: {
    search_fields: {
      title: {},
      body_content: {},
    },
    result_fields: {
      title: {
        snippet: { size: 75, fallback: true },
      },
      body_content: {
        snippet: { size: 240, fallback: true },
      },
      url: { raw: {} },
    },
  },
};

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

  return (
    <SearchProvider config={{ apiConnector: connector, ...searchConfig }}>
      <SearchBox
        inputProps={{ placeholder: "Search for something", autoFocus: "on" }}
      />
      <PagingInfo />
      <Results titleField="title" urlField="url" />
    </SearchProvider>
  );
}
