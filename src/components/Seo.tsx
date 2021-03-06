import { memo, VFC } from 'react'
import Head from 'next/head'

type MetaData = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  pageImgWidth?: number
  pageImgHeight?: number
}

// eslint-disable-next-line react/display-name
const Seo: VFC<MetaData> = memo(
  ({
    pageTitle,
    pageDescription,
    pagePath,
    pageImg,
    pageImgWidth,
    pageImgHeight
  }) => {
    const defaultTitle = 'megumu.me'
    const defaultDescription = 'megumu.me'

    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
    const description = pageDescription ? pageDescription : defaultDescription
    const url = pagePath
    const imgUrl = pageImg
    const imgWidth = pageImgWidth ? pageImgWidth : 1280
    const imgHeight = pageImgHeight ? pageImgHeight : 640

    return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:width" content={String(imgWidth)} />
        <meta property="og:image:height" content={String(imgHeight)} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href="https://megumu.me/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://megumu.me/favicon.ico"
        ></link>
      </Head>
    )
  }
)

export default Seo
