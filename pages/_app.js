import "../styles/globals.css";
import "../styles/style.css";
import "../styles/legalnotice.css";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1WFQ3BGZS0"></Script>
  <Script
   id='google-analytics'
   strategy="afterInteractive"
   dangerouslySetInnerHTML={{
    __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-1WFQ3BGZS0', {
      page_path: window.location.pathname,
     });
    `,
    }}
  />
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
      <Component {...pageProps} />
      <CookieConsent buttonStyle={{ backgroundColor: "#008039", fontSize: "16px",color:"#fff" }} buttonText="Accept">Ce site utilise des cookies pour améliorer l'expérience utilisateur.</CookieConsent>
    </>
  );
}

export default MyApp;
