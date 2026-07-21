import Page from "../../components/Page";
import Toolbox from "../../components/Toolbox/Toolbox";

const MyStack = () => (
  <Page
    title="Toolbox"
    description="List of tools & software I use daily to support my interest and hunger on the journey of designing software."
    image="https://www.boriskirov.me/meta-tag-toolbox.png"
  >
    <h1 className="heading-2xl">Toolbox</h1>
    <p>
      List of tools & software I use daily to support my interest and hunger on
      the journey of designing software. The list can constantly change as I try
      to experiment with new solutions and methods.
    </p>
    <Toolbox />
  </Page>
);

export default MyStack;
