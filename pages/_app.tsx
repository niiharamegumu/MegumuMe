import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { darkTheme } from "../theme/theme";
import GoogleAnalytics from "../components/GoogleAnalytics";
import usePageView from "../hooks/usePageView";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
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
