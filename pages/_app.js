import "../styles/fluiditype.css";
import "../styles/font-switch.css";
import "../styles/theme.css";
import "../styles/styles.css";
import "../styles/equalizer.css";
import "../styles/colors-schema.css";
import "../styles/toast.css";
import "../styles/search.css";
import "../styles/rive.css";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

export { reportWebVitals } from "next-axiom";
