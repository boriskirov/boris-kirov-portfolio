import Page from "../../components/Page";
import { codes } from "../../lib/content";

export async function getStaticProps({ params }) {
  const codeData = await codes.getById(params.id);
  return { props: { codeData } };
}

export async function getStaticPaths() {
  return { paths: codes.getAllIds(), fallback: false };
}

export default function Code({ codeData }) {
  return (
    <Page
      title={codeData.title}
      description={codeData.description}
      image={codeData.image}
      motion={false}
    >
      <h1 className="blogTitle">{codeData.title}</h1>
      <small>{codeData.type}</small>
      <div
        dangerouslySetInnerHTML={{ __html: codeData.contentHtml }}
        className="contentWrapper"
      />
    </Page>
  );
}
