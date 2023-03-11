import { type UserPreview } from './user'

export interface Comment {
  id: string
  message: string
  owner: UserPreview
  postId: string
  publishDate: string
}
export type CommentCreate = Partial<Pick<Comment, 'message'>> & Pick<Comment, 'postId'> & {
  ownerId: string
}
