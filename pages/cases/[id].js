import Link from "next/dist/client/link";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import Metadata from "../../components/metadata";
import { getAllCasesIds, getCasesData } from "../../lib/cases";

export async function getStaticProps({ params }) {
  const caseData = await getCasesData(params.id);
  return {
    props: {
      caseData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCasesIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Case({ caseData }) {
  return (
    <MainWrapper>
      <Metadata
        title={caseData.title}
        description={caseData.description}
        image={caseData.image}
        name="Boris Kirov"
      />
      <Main>
        <h1 className="blogTitle">{caseData.title}</h1>
        <hr />
        <p>{caseData.description}</p>
        <div className="flex info">
          <small>{caseData.type}</small> • <small>{caseData.date}</small>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: caseData.contentHtml }}
          className="contentWrapper"
        />
      </Main>
    </MainWrapper>
  );
}
