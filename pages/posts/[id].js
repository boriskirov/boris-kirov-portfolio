import Page from "../../components/Page";
import { posts } from "../../lib/content";

export async function getStaticProps({ params }) {
  const postData = await posts.getById(params.id);
  return { props: { postData } };
}

export async function getStaticPaths() {
  return { paths: posts.getAllIds(), fallback: false };
}

export default function Post({ postData }) {
  return (
    <Page
      title={postData.title}
      description={postData.description}
      image={postData.image}
      motion={false}
    >
      <h1 className="blogTitle">{postData.title}</h1>
      <small>{postData.type}</small>
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="contentWrapper"
      />
    </Page>
  );
}
