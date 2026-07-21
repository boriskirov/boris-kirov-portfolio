import Page from "../../components/Page";
import Cheatsheet from "../../components/Cheatsheet/Cheatsheet";

const Cheatsheets = () => (
  <Page
    title="Cheatsheets"
    description="List of commands and shortcuts to keep my day fun and productive. "
    image="https://www.boriskirov.me/meta-tag-cheatsheets.png"
  >
    <h1 className="heading-2xl">Cheatsheets</h1>
    <p>
      Working with speed and efficiency is essential when you spend your day
      designing and coding. This section of my website is dedicated to commands
      & shortcuts, so my day can be fun and productive.
    </p>
    <Cheatsheet />
  </Page>
);

export default Cheatsheets;
