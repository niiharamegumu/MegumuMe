import { GetServerSidePropsContext } from 'next'
import RSS from 'rss'

import { clientBlogs } from '../libs/microCMS/client'
import { BlogType } from '../types/blog'

export const getServerSideProps = async ({
  res
}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {}
  }
}

const Page = () => null
export default Page

async function generateFeedXml() {
  const feed = new RSS({
    title: 'megumu.me',
    description:
      '宮崎生まれ、宮崎育ちフロントエンドを主にしている地方在住エンジニアのブログ',
    site_url: process.env.NEXT_PUBLIC_SITE_URL!,
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL!}/feed`,
    language: 'ja'
  })

  const { contents: posts } = await clientBlogs.get<{ contents: BlogType[] }>({
    endpoint: 'blogs',
    // 一旦、決め打ち.100件ほどは取得できる計算.
    queries: { limit: 100 }
  })
  posts?.forEach(post => {
    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.createdAt),
      url: `${process.env.NEXT_PUBLIC_SITE_URL!}/article/${post.id}`
    })
  })
  return feed.xml()
}
