import { useEffect, useMemo, VFC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Button, Spinner } from '@chakra-ui/react'
import useSWR from 'swr'
import cheerio, { CheerioAPI } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

import Seo from '../../components/Seo'
import { BlogDetail } from '../../components/blogs/BlogDetail'
import { clientBlogs } from '../../libs/microCMS/client'
import { BlogType } from '../../types/blog'
import VisibilitySection from '../../components/VisibilitySection'

type Props = {
  staticBlog: BlogType
  id: string
}

const codeHighlight = (text: string): CheerioAPI => {
  const $ = cheerio.load(text)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return $
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await clientBlogs.get<{ contents: BlogType[] }>({
    endpoint: 'blogs',
    queries: { fields: 'id' }
  })
  const paths = data.contents.map(content => {
    return { params: { id: content.id } }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await clientBlogs.get<BlogType>({
    endpoint: 'blogs',
    contentId: `${params?.id}`
  })

  blog.body = codeHighlight(blog.body).html()
  return {
    props: {
      staticBlog: blog,
      id: params?.id
    },
    revalidate: 86400 * 3
  }
}

const Post: VFC<Props> = props => {
  const { staticBlog, id } = props
  const router = useRouter()

  const fetcher = (): Promise<BlogType> =>
    clientBlogs.get({ endpoint: 'blogs', contentId: id }).then(data => data)
  const {
    data: blog,
    error,
    mutate
  } = useSWR<BlogType>('blog', fetcher, {
    fallbackData: staticBlog
  })

  const ogImage = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_SITE_URL!}/api/og?title=${blog?.title}`
  }, [blog?.title])

  useEffect(() => {
    mutate()
  }, [mutate])

  if (!blog) {
    return <Spinner />
  }
  if (error) {
    return <div>failed to load.</div>
  }

  blog.body = codeHighlight(blog.body).html()

  return (
    <>
      <Seo
        pageTitle={blog.title}
        pageDescription={blog.description}
        pageImg={ogImage}
      />

      <BlogDetail blog={blog} />
      <VisibilitySection delay={0.2} chakraProps={{ mt: 6 }}>
        <Button
          onClick={() => router.back()}
          bg={'purple.400'}
          color="gray.900"
          display={{ base: 'block', lg: 'inline-block' }}
          textAlign="center"
          borderRadius={6}
          p=".6em 1em"
          fontSize="sm"
          fontWeight="bold"
          _hover={{ border: 'none', bg: 'purple.600', color: 'gray.100' }}
        >
          戻る
        </Button>
      </VisibilitySection>
    </>
  )
}

export default Post
