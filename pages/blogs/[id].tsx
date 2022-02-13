import { useEffect, VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import cheerio, { CheerioAPI } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

import Seo from "../../components/Seo";
import { BlogDetail } from "../../components/blogs/BlogDetail";
import { MainLayout } from "../../components/MainLayout";
import { Nav } from "../../components/Nav";
import { clientBlogs } from "../../libs/microCMS/client";
import { BlogType } from "../../types/blog";

type Props = {
  staticBlog: BlogType;
  id: string;
};

const codeHighlight = (text: string): CheerioAPI => {
  const $ = cheerio.load(text);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  return $;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await clientBlogs.get({
    endpoint: "blogs",
    queries: { fields: "id" },
  });
  const paths = data.contents.map((content: { id: string }) => {
    return { params: { id: content.id } };
  });
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await clientBlogs.get({
    endpoint: "blogs",
    contentId: `${params?.id}`,
  });

  blog.body = codeHighlight(blog.body).html();
  return {
    props: {
      staticBlog: blog,
      id: params?.id,
    },
    revalidate: 30,
  };
};

const Post: VFC<Props> = (props) => {
  const { staticBlog, id } = props;
  const router = useRouter();

  const fetcher = () =>
    clientBlogs.get({ endpoint: "blogs", contentId: id }).then((data) => data);
  const {
    data: blog,
    error,
    mutate,
  } = useSWR<BlogType>("blog", fetcher, {
    fallbackData: staticBlog,
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (router.isFallback || !blog) {
    return (
      <MainLayout rightComponents={<Nav />}>
        <Spinner />
      </MainLayout>
    );
  }
  if (error) {
    return (
      <MainLayout rightComponents={<Nav />}>
        <div>failed to load.</div>
      </MainLayout>
    );
  }

  blog!.body = codeHighlight(blog!.body).html();

  return (
    <>
      <Seo
        pageTitle={blog!.title}
        pageDescription={`${blog!.description}?fm=webp&w=200`}
        pageImg={blog!.mainImage.url}
      />
      <MainLayout rightComponents={<Nav />}>
        <BlogDetail blog={blog} />
      </MainLayout>
    </>
  );
};

export default Post;
