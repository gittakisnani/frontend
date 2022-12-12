import "../styles/globals.css";
import "../styles/style.css";
import "../styles/legalnotice.css";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
      <Component {...pageProps} />
      <CookieConsent buttonStyle={{ backgroundColor: "#008039", fontSize: "16px",color:"#fff" }} buttonText="Accept">This website uses cookies to enhance the user experience.</CookieConsent>
    </>
  );
}

export default MyApp;
