import { useEffect, VFC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Grid } from '@chakra-ui/react'
import useSWR from 'swr'
import { FcReading } from 'react-icons/fc'

import Seo from '../../components/Seo'
import { BlogCard } from '../../components/blogs/BlogCard'
import { HeadH2 } from '../../components/style/Common'
import { clientBlogs } from '../../libs/microCMS/client'
import { ResponseBlogsType, BlogType } from '../../types/blog'
import BlogsNav from '../../components/blogs/BlogsNav'
import VisibilitySection from '../../components/VisibilitySection'
import { calcPageCount } from '../../utils/functions'
import Pagination from '../../components/Pagination'

type Props = {
  staticBlogs: BlogType[]
  id: number
  isLastPage: boolean
}
const maxNumPerPage: number = 20

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await clientBlogs.get<ResponseBlogsType>({
    endpoint: 'blogs',
    queries: { limit: 1 }
  })
  const pageCount = await calcPageCount(maxNumPerPage, data.totalCount)
  const paths = []
  for (let i = 1; i <= pageCount; i++) {
    paths.push({ params: { id: String(i) } })
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params!.id)
  const data = await clientBlogs.get<ResponseBlogsType>({
    endpoint: 'blogs',
    queries: { limit: maxNumPerPage, offset: (id - 1) * maxNumPerPage }
  })
  return {
    props: {
      staticBlogs: data.contents,
      id,
      isLastPage: data.totalCount <= id * maxNumPerPage
    },
    revalidate: 60 * 3
  }
}

export const Blogs: VFC<Props> = props => {
  const { staticBlogs, id, isLastPage } = props
  const fetcher = (): Promise<BlogType[]> =>
    clientBlogs
      .get({
        endpoint: 'blogs',
        queries: { limit: maxNumPerPage, offset: (id - 1) * maxNumPerPage }
      })
      .then(data => data.contents)
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
      <Grid templateColumns={'1fr'} gap={2}>
        {blogs?.map(blog => (
          <VisibilitySection key={blog.id} delay={0.15}>
            <BlogCard
              link={`/article/${blog.id}`}
              title={blog.title}
              createdAt={blog.createdAt}
              tags={blog.tags}
            />
          </VisibilitySection>
        ))}
      </Grid>
      <VisibilitySection delay={0.1}>
        <Pagination
          currentPagination={id}
          pagePath="/blogs/"
          isLastPage={isLastPage}
        />
      </VisibilitySection>
    </>
  )
}
export default Blogs
