import { ZennUser } from './zennUser'

export type ZennItem = {
  id: number
  post_type: string
  title: string
  slug: string
  published: boolean
  comments_count: number
  liked_count: number
  body_letters_count: number
  article_type: string
  emoji: string
  is_suspending_private: boolean
  published_at: string
  body_updated_at: string | null
  source_repo_updated_at: string | null
  path: string
  user: ZennUser
  publication: string | null
}
