import { useEffect, VFC } from "react";
import { GetStaticProps } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import useSWR from "swr";
import { FcReading } from "react-icons/fc";

import Seo from "../components/Seo";
import { BlogCard } from "../components/blogs/BlogCard";
import { HeadH2 } from "../components/style/Common";
import { clientBlogs } from "../libs/microCMS/client";
import { BlogType } from "../types/blog";

type Props = {
  staticBlogs: BlogType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await clientBlogs.get({ endpoint: "blogs" });
  return {
    props: {
      staticBlogs: data.contents,
    },
    revalidate: 30,
  };
};

export const Blogs: VFC<Props> = (props) => {
  const { staticBlogs } = props;
  const fetcher = () =>
    clientBlogs.get({ endpoint: "blogs" }).then((data) => data.contents);
  const {
    data: blogs,
    error,
    mutate,
  } = useSWR<BlogType[]>("blogs", fetcher, {
    fallbackData: staticBlogs,
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (error) {
    return <div>failed to load.</div>;
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
      <Grid
        templateColumns={{
          base: "1fr",
        }}
        gap={6}
      >
        {blogs?.map((blog) => (
          <GridItem key={blog.id}>
            <BlogCard blog={blog} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default Blogs;
