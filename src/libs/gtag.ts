const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

if (googleAnalyticsId === undefined)
  throw Error(
    '.envファイルに`NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`を設定してください。'
  )

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
export const existsGaId = GA_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path
  })
}
