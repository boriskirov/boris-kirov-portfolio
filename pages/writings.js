import Page from "../components/Page";
import ComputeParticles from "../components/ComputeParticles";
import { posts, cases, codes } from "../lib/content";

export async function getStaticProps() {
  return {
    props: {
      allPostsData: posts.getSorted(),
      allCasesData: cases.getSorted(),
      allCodesData: codes.getSorted(),
    },
  };
}

export default function Writings() {
  return (
    <Page
      title="Writings"
      description="My small space where I try to think out loud about everything related to design, software and technology. You'll find case studies, tutorials and blog posts here."
      image="/meta-tag-writings.png"
      bare
    >
      <div className="contentWrapper dot-grid">
        <ComputeParticles />
      </div>
    </Page>
  );
}
