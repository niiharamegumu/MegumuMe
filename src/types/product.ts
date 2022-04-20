export type ProductType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  mainImage: {
    url: string
    height: number
    width: number
  }
  sumally: string
  skills: Array<string>
  url?: string
}
