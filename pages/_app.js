// import "../styles/fluiditype.css";
import "../styles/font-switch.css";
import "../styles/theme.css";
import "../styles/styles.css";
import "../styles/equalizer.css";
import "../styles/colors-schema.css";
import "../styles/toast.css";
import "../styles/search.css";
import "../styles/nav.css";
import "../styles/glow.css";
import Script from "next/script";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import "../styles/nav-collapsible.css";
import SideNavCollapsible from "../components/SideNavCollapsible";
import { SpeedInsights } from "@vercel/speed-insights/next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <div className="s-shell">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
        </Script>
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
