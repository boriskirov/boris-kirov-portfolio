import Link from "next/dist/client/link";
import MainWrapper from "../../components/mainWrapper";
import Main from "../../components/innerWrapper";
import Metadata from "../../components/metadata";
import { getAllPostIds, getPostData } from "../../lib/posts";
import FeedbackForm from "../../components/feedbackForm";

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
      <Metadata
        title={postData.title}
        description={postData.description}
        image={postData.image}
        name="Boris Kirov"
      />
      <Main>
        <Link href="/writings" className="backButton">
          Back
        </Link>{" "}
        <h1 className="blogTitle">{postData.title}</h1>
        <small>{postData.type}</small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <FeedbackForm
          description={
            "You want to share or reach out regarding something I wrote? Send it my way on Twitter."
          }
        />
      </Main>
    </MainWrapper>
  );
}
