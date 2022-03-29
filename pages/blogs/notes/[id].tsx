import { Grid, GridItem } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { VFC } from "react";
import { FcReading } from "react-icons/fc";

import { BlogCard } from "../../../components/blogs/BlogCard";
import BlogsNav from "../../../components/blogs/BlogsNav";
import Pagination from "../../../components/Pagination";
import Seo from "../../../components/Seo";
import { HeadH2 } from "../../../components/style/Common";

type Note = {
  id: Number;
  noteUrl: string;
  name: string;
  eyecatch: string;
  publishAt: string;
};
type Props = {
  staticNotes: Note[];
  isLastPage: boolean;
};

const noteGetUrl =
  "https://note.com/api/v2/creators/niihara_megumu/contents?kind=note";
const fetchNotes = async (pageId: string | string[] | undefined) => {
  const res = await fetch(`${noteGetUrl}&page=${pageId}`);
  const result = await res.json();
  const isLastPage: boolean = result.data.isLastPage;
  const notes: Note[] = result.data.contents.map((note: Note) => {
    return {
      id: note.id,
      noteUrl: note.noteUrl,
      name: note.name,
      eyecatch: note.eyecatch,
      publishAt: note.publishAt,
    };
  });
  return { notes, isLastPage };
};

const calcPageCount = async () => {
  const maxNumPerPage: number = 6;
  const res = await fetch(noteGetUrl);
  const result = await res.json();
  const allNotesCount: number = result.data.totalCount;
  return (allNotesCount % maxNumPerPage) + 1;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = await calcPageCount();
  const paths = [];
  for (let i = 1; i <= pageCount; i++) {
    paths.push({ params: { id: String(i) } });
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { notes, isLastPage } = await fetchNotes(params?.id);
  return {
    props: { staticNotes: notes, isLastPage },
    revalidate: 60,
  };
};

const BlogsNotes: VFC<Props> = (props) => {
  const { staticNotes, isLastPage } = props;
  const router = useRouter();
  const currentPagination = Number(router.asPath.split("/").pop());

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
        blogs
      </HeadH2>
      <BlogsNav />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        {staticNotes?.map((note) => (
          <GridItem
            key={String(note.id)}
            bg="gray.300"
            borderRadius={10}
            overflow="hidden"
          >
            <BlogCard
              link={note.noteUrl}
              title={note.name}
              createdAt={note.publishAt}
              isBlank={true}
            />
          </GridItem>
        ))}
      </Grid>
      <Pagination
        currentPagination={currentPagination}
        pagePath="/blogs/notes/"
        isLastPage={isLastPage}
      />
    </>
  );
};

export default BlogsNotes;
