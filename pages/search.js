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
            <Results titleField="title" urlField="nps_link" />
          </SearchProvider>
        </Main>
      </MainWrapper>
    </Motion>
  );
}
