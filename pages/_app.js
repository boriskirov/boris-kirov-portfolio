import "../styles/font-switch.css";
import "../styles/styles.css";
import "../styles/equalizer.css";
import "../styles/colors-schema.css";
import "../styles/toast.css";
import "../styles/search.css";
import "../styles/nav.css";
import "../styles/chat.css";
import Script from "next/script";
import MobileNav from "../components/MobileNav";
import "../styles/nav-collapsible.css";
import SideNavCollapsible from "../components/SideNavCollapsible";
import DotGlow from "../components/DotGlow";
import { SpeedInsights } from "@vercel/speed-insights/next";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DotGlow />
      <div className="s-shell">
        {gaMeasurementId ? (
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
        ) : null}
        {/* side rails stay as-is for desktop */}
        <SideNavCollapsible />
        {/* mobile menu */}
        <MobileNav />
        <main className="layout s-main">
          <Component {...pageProps} />
        </main>
      </div>
      <SpeedInsights />
    </>
  );
};

export default MyApp;
