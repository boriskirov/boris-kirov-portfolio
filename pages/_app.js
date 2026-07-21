import Script from "next/script";

import "../styles/styles.css";
import "../styles/nav.css";
import "../styles/chat.css";
import "../styles/search.css";

import MobileNav from "../components/MobileNav";
import SideNavCollapsible from "../components/SideNavCollapsible";
import DotGlow from "../components/DotGlow";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID;

const MyApp = ({ Component, pageProps }) => (
  <>
    <DotGlow />
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

export default MyApp;
