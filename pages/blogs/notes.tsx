import { Grid, GridItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, VFC } from "react";
import { FcReading } from "react-icons/fc";

import { BlogCard } from "../../components/blogs/BlogCard";
import BlogsNav from "../../components/blogs/BlogsNav";
import Seo from "../../components/Seo";
import { HeadH2 } from "../../components/style/Common";

type Note = {
  id: Number;
  noteUrl: string;
  name: string;
  eyecatch: string;
  publishAt: string;
};
type Props = {
  staticNotes: Note[];
};

const fetchNotes = async () => {
  const res = await fetch(
    "https://note.com/api/v2/creators/niihara_megumu/contents?kind=note&page=1"
  );
  const result = await res.json();
  const notes = result.data.contents.map((note: Note) => {
    return {
      id: note.id,
      noteUrl: note.noteUrl,
      name: note.name,
      eyecatch: note.eyecatch,
      publishAt: note.publishAt,
    };
  });
  return notes;
};

export const getStaticProps: GetStaticProps = async () => {
  const notes = await fetchNotes();
  return {
    props: { staticNotes: notes },
    revalidate: 60,
  };
};

const BlogsNotes: VFC<Props> = (props) => {
  const { staticNotes } = props;

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
              isTargetBlank={true}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default BlogsNotes;
