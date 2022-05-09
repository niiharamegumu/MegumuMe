import { useEffect, VFC } from 'react'
import { GetStaticProps } from 'next'
import { Grid, GridItem } from '@chakra-ui/react'
import useSWR from 'swr'
import { FcReading } from 'react-icons/fc'

import Seo from '../../components/Seo'
import { BlogCard } from '../../components/blogs/BlogCard'
import { HeadH2 } from '../../components/style/Common'
import { clientBlogs } from '../../libs/microCMS/client'
import { BlogType } from '../../types/blog'
import BlogsNav from '../../components/blogs/BlogsNav'
import VisibilitySection from '../../components/VisibilitySection'

type Props = {
  staticBlogs: BlogType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await clientBlogs.get<{ contents: BlogType[] }>({
    endpoint: 'blogs'
  })
  return {
    props: {
      staticBlogs: data.contents
    },
    revalidate: 30
  }
}

export const Blogs: VFC<Props> = props => {
  const { staticBlogs } = props
  const fetcher = (): Promise<BlogType[]> =>
    clientBlogs.get({ endpoint: 'blogs' }).then(data => data.contents)
  const {
    data: blogs,
    error,
    mutate
  } = useSWR<BlogType[]>('blogs', fetcher, {
    fallbackData: staticBlogs
  })

  useEffect(() => {
    mutate()
  }, [mutate])

  if (error) {
    return <div>failed to load.</div>
  }

  return (
    <>
      <Seo
        pageTitle="Blogs"
        pageDescription="Blog一覧。主にフロントエンドに関する記事を上げています。"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcReading />
        blogs
      </HeadH2>
      <BlogsNav />
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)'
        }}
        gap={6}
      >
        {blogs?.map(blog => (
          <VisibilitySection
            key={blog.id}
            delay={0.15}
            chakraProps={{
              bg: 'gray.300',
              borderRadius: 10,
              overflow: 'hidden'
            }}
          >
            <BlogCard
              link={`/article/${blog.id}`}
              title={blog.title}
              createdAt={blog.createdAt}
              tags={blog.tags}
            />
          </VisibilitySection>
        ))}
      </Grid>
    </>
  )
}
export default Blogs
