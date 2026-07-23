import Script from "next/script";

// Order matters: tokens → base → utilities → components, then feature stylesheets.
import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/utilities.css";
import "../styles/components.css";
import "../styles/nav.css";
import "../styles/chat.css";
import "../styles/search.css";

import MobileNav from "../components/MobileNav";
import SideNavCollapsible from "../components/SideNavCollapsible";
import DotGlow from "../components/DotGlow";
import SearchOverlay from "../components/SearchOverlay";
import { useFontToggle } from "../components/FontSwitch";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID;

const MyApp = ({ Component, pageProps }) => {
  // Registers the ⌥+S font-toggle shortcut app-wide. No visible affordance;
  // the shortcut is discoverable via the Commands modal (⌥+/).
  useFontToggle();

  return (
    <>
      <DotGlow />
      <SearchOverlay />
      <div className="s-shell">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        <SideNavCollapsible />
        <MobileNav />
        <main className="layout s-main">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
