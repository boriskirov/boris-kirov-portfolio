import "../styles/theme.css";
import "../styles/fluiditype.css";

import "../styles/equalizer.css";
import "../styles/commandbar.css";

import CommandBar from "../components/commandBar/commandbar";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <CommandBar>
      <Component {...pageProps} />{" "}
    </CommandBar>
  );
}
