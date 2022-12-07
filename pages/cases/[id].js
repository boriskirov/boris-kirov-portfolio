import Link from "next/dist/client/link";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import Metadata from "../../components/metadata";
import { getAllCasesIds, getCasesData } from "../../lib/cases";
import FeedbackForm from "../../components/feedbackForm";

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
        <Link href="/writings" className="backButton">
          Back
        </Link>{" "}
        <h1 className="blogTitle">{caseData.title}</h1>
        <small>{caseData.type}</small>
        <div
          dangerouslySetInnerHTML={{ __html: caseData.contentHtml }}
          className="contentWrapper"
        />
        <FeedbackForm
          description={
            "You want to share or reach out regarding something I wrote? Send it my way on Twitter."
          }
        />
      </Main>
    </MainWrapper>
  );
}
