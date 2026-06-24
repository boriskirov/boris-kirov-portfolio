import Page from "../../components/Page";
import { cases } from "../../lib/content";

export async function getStaticProps({ params }) {
  const caseData = await cases.getById(params.id);
  return { props: { caseData } };
}

export async function getStaticPaths() {
  return { paths: cases.getAllIds(), fallback: false };
}

export default function Case({ caseData }) {
  return (
    <Page
      title={caseData.title}
      description={caseData.description}
      image={caseData.image}
      motion={false}
    >
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
    </Page>
  );
}
