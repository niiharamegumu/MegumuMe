import { Grid, Spinner } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { VFC } from 'react'
import { FcReading } from 'react-icons/fc'

import { BlogCard } from '../../../components/blogs/BlogCard'
import BlogsNav from '../../../components/blogs/BlogsNav'
import Pagination from '../../../components/Pagination'
import Seo from '../../../components/Seo'
import { HeadH2 } from '../../../components/style/Common'
import VisibilitySection from '../../../components/VisibilitySection'
import { calcPageCount } from '../../../utils/functions'

type Note = {
  id: Number
  noteUrl: string
  name: string
  eyecatch: string
  publishAt: string
}
type Props = {
  staticNotes: Note[]
  isLastPage: boolean
}

const noteGetUrl =
  'https://note.com/api/v2/creators/niihara_megumu/contents?kind=note'
const fetchNotes = async (pageId: string | string[] | undefined) => {
  const res = await fetch(`${noteGetUrl}&page=${pageId}`)
  const result = await res.json()
  const isLastPage: boolean = result.data.isLastPage
  const notes: Note[] = result.data.contents.map((note: Note) => {
    return {
      id: note.id,
      noteUrl: note.noteUrl,
      name: note.name,
      eyecatch: note.eyecatch,
      publishAt: note.publishAt
    }
  })
  return { notes, isLastPage }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxNumPerPage: number = 6
  const res = await fetch(noteGetUrl)
  const result = await res.json()
  const allNotesCount: number = result.data.totalCount
  const pageCount = await calcPageCount(maxNumPerPage, allNotesCount)
  const paths = []
  for (let i = 1; i <= pageCount; i++) {
    paths.push({ params: { id: String(i) } })
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { notes, isLastPage } = await fetchNotes(params?.id)
  return {
    props: { staticNotes: notes, isLastPage },
    revalidate: 60
  }
}

const BlogsNotes: VFC<Props> = props => {
  const { staticNotes, isLastPage } = props
  const router = useRouter()
  const currentPagination = Number(router.asPath.split('/').pop())

  return (
    <>
      <Seo
        pageTitle="Blogs-Notes"
        pageDescription="note.comで投稿している記事一覧。"
        pageImg="https://megumu-me.vercel.app/icon.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <HeadH2 display="flex" alignItems="center" gap={2}>
        <FcReading />
        blogs - notes
      </HeadH2>
      <BlogsNav />
      <Grid templateColumns={'1fr'} gap={2}>
        {staticNotes?.map(note => (
          <VisibilitySection key={String(note.id)} delay={0.15}>
            <BlogCard
              link={note.noteUrl}
              title={note.name}
              createdAt={note.publishAt}
              isBlank={true}
            />
          </VisibilitySection>
        ))}
      </Grid>
      <VisibilitySection delay={0.1}>
        <Pagination
          currentPagination={currentPagination}
          pagePath="/blogs/notes/"
          isLastPage={isLastPage}
        />
      </VisibilitySection>
    </>
  )
}

export default BlogsNotes
