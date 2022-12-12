import "../styles/globals.css";
import "../styles/style.css";
import "../styles/legalnotice.css";
import Head from "next/head";

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
    </>
  );
}

export default MyApp;
