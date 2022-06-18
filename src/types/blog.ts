export type BlogType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  description: string
  mainImage: {
    url: string
    height: number
    width: number
  }
  tags?: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      tagName: string
    }
  ]
}

export type ResponseBlogsType = {
  contents: BlogType[]
  totalCount: number
  offset: number
  limit: number
}
