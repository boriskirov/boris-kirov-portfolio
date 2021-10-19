import Link from "next/dist/client/link";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <MainWrapper>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Main>
        <Link href="/writings">
          <a className="backButton">Back</a>
        </Link>{" "}
        <h1 className="blogTitle">{postData.title}</h1>
        <small>{postData.type}</small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Main>
    </MainWrapper>
  );
}
