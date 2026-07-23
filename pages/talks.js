import Page from "../components/Page";
import ComputeParticles from "../components/ComputeParticles";

const Talks = () => (
  <Page
    title="Playground"
    description="My playground, the place where I explore the functional, visual and collaborative side of design."
    image="/meta-tag-playground.png"
    bare
  >
    <div className="contentWrapper dot-grid">
      <ComputeParticles />
    </div>
  </Page>
);

export default Talks;
