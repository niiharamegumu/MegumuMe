import { GetStaticProps } from 'next'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { FcReading } from 'react-icons/fc'

import { ZennItem } from '../../../types/zenn/zennItem'
import Seo from '../../../components/Seo'
import { HeadH2 } from '../../../components/style/Common'
import BlogsNav from '../../../components/blogs/BlogsNav'
import VisibilitySection from '../../../components/VisibilitySection'
import { BlogCard } from '../../../components/blogs/BlogCard'

type BlogZennProps = {
  articles?: ZennItem[]
}

const zennApiURL = 'https://zenn.dev/'

const zennFetcher = async <T,>(path: string) => {
  const res = await fetch(`${zennApiURL}api/${path}`)
  const result: T = await res.json()
  return result
}

const BlogZenn = (props: BlogZennProps) => {
  const { articles } = props

  if (!articles) {
    return <p>Zennへの投稿はございません。</p>
  }

  return (
    <>
      <Seo
        pageTitle="Blogs-Zenn"
        pageDescription="zenn.devで投稿している記事一覧。"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcReading />
        blogs - zenn
      </HeadH2>
      <BlogsNav />
      <Grid templateColumns={'1fr'} gap={2}>
        {articles.map(article => (
          <VisibilitySection key={String(article.id)} delay={0.15}>
            <Flex gap={{ base: 6, md: 8 }} alignItems={'center'}>
              <Text fontSize={{ base: '4xl', sm: '6xl' }}>{article.emoji}</Text>
              <BlogCard
                link={`${zennApiURL}${article.path}`}
                title={article.title}
                createdAt={article.published_at}
                updatedAt={article?.body_updated_at}
                isBlank={true}
              />
            </Flex>
          </VisibilitySection>
        ))}
      </Grid>
    </>
  )
}

export default BlogZenn

export const getStaticProps: GetStaticProps = async () => {
  const result = await zennFetcher<{ articles: ZennItem[] }>(
    'articles?username=niiharamegumu&order=latest'
  )
  console.log()

  return {
    props: {
      articles: result.articles
    },
    revalidate: 60
  }
}
