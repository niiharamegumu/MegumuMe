import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

import { clientBlogs } from "../libs/microCMS/client";

type PostData = {
  id: string;
  updatedAt: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await clientBlogs.get({
    endpoint: "blogs",
    queries: { fields: "id,updatedAt" },
  });
  const postsData = data.contents;

  const fields: ISitemapField[] = [];
  postsData.forEach((data: PostData) => {
    fields.push({
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${data.id}`,
      lastmod: format(new Date(data.updatedAt), "yyyy-MM-dd"),
      priority: 1,
      changefreq: "weekly",
    });
  });
  context.res.setHeader(
    "Cache-Control",
    "max-age=86400, stale-while-revalidate=360"
  );
  return getServerSideSitemap(context, fields);
};

const Sitemap = () => null;
export default Sitemap;
