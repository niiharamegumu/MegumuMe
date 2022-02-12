export type ProductType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  "main-image": {
    url: string;
    height: number;
    width: number;
  };
  sumally: string;
  description: string;
  skills: Array<string>;
  url?: string;
};
