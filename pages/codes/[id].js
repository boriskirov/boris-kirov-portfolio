import Link from "next/dist/client/link";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import Metadata from "../../components/metadata";
import { getAllCodeIds, getCodeData } from "../../lib/codes";

export async function getStaticProps({ params }) {
  const codeData = await getCodeData(params.id);
  return {
    props: {
      codeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCodeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Code({ codeData }) {
  return (
    <MainWrapper>
      <Metadata
        title={codeData.title}
        description={codeData.description}
        image={codeData.image}
        name="Boris Kirov"
      />
      <Main>
        <h1 className="blogTitle">{codeData.title}</h1>
        <small>{codeData.type}</small>
        <div
          dangerouslySetInnerHTML={{ __html: codeData.contentHtml }}
          className="contentWrapper"
        />
      </Main>
    </MainWrapper>
  );
}
