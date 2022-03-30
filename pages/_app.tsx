import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { darkTheme } from "../theme/theme";
import GoogleAnalytics from "../components/GoogleAnalytics";
import usePageView from "../hooks/usePageView";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="./icon-192x192.png"
        />
      </Head>
      <GoogleAnalytics />
      <ChakraProvider theme={darkTheme} resetCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
