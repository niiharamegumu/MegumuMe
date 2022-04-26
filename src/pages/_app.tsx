import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import { Layout } from '../components/Layout'
import { darkTheme } from '../theme/theme'
import GoogleAnalytics from '../components/GoogleAnalytics'
import usePageView from '../hooks/usePageView'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }: AppProps) {
  usePageView()
  return (
    <>
      <Head>
        <meta name="theme-color" content="#171923" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./icon-180x180.png"
        />
      </Head>
      <GoogleAnalytics />
      <ChakraProvider theme={darkTheme} resetCSS>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Layout>
            <Component key={router.asPath} {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}

export default MyApp
