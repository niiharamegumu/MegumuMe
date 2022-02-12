import { Grid, GridItem, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, VFC } from "react";
import useSWR from "swr";
import { BlogCard } from "../../components/blogs/BlogCard";

import { MainLayout } from "../../components/MainLayout";
import { Nav } from "../../components/Nav";
import { HeadH2 } from "../../components/style/Common";
import { clientBlogs } from "../../libs/microCMS/client";
import { BlogType } from "../../types/blog";

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

  if (error) return <div>failed to load.</div>;

  return (
    <MainLayout rightComponents={<Nav />}>
      <HeadH2 display="flex" alignItems="center" gap={2}>
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
    </MainLayout>
  );
};
export default Blogs;
