export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  description: string;
  "main-image": {
    url: string;
    height: number;
    width: number;
  };
};
