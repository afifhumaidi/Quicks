import { type UserPreview } from './user'

export interface Post {
  id: string
  text: string
  image: string
  likes: number
  link: string
  tags: string[]
  publishDate: string
  owner: UserPreview
}
export type PostPreview = Omit<Post, 'link'>
export type PostCreate = Partial<Omit<Post, 'owner' | 'id' | 'publishDate'>> & {
  ownerId: string
}
export type PostUpdate = Partial<Omit<Post, 'id' | 'owner'>>
