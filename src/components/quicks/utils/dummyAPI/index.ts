import axios from 'axios'
import { type PostCreate, type List, type Post, type PostUpdate, type Comment, type CommentCreate } from './model'

export default class DummyAPI {
  #baseUrl = 'https://dummyapi.io/data/v1'
  #headers = {
    'app-id': '63b3c5f6e6ba3403e99a4f10'
  }

  // Post
  async getPost(): Promise<Post[] | undefined>
  async getPost(id: string, by: 'user' | 'tag'): Promise<Post[] | undefined>
  async getPost(id: string, by: 'post'): Promise<Post | undefined>
  async getPost(id?: string, by?: 'user' | 'tag' | 'post'): Promise<Post | Post[] | undefined> {
    let url
    switch (by) {
      case 'user': {
        url = `${this.#baseUrl}/user/${id}/post`
        break
      }
      case 'tag': {
        url = `${this.#baseUrl}/tag/${id}/post`
        break
      }
      case 'post': {
        url = `${this.#baseUrl}/post/${id}`
        break
      }
      default: {
        url = `${this.#baseUrl}/post`
      }
    }

    try {
      if (by === 'post') {
        const response = await axios<Post>({
          method: 'get',
          url,
          headers: this.#headers
        })
        return response.data
      } else {
        const response = await axios<List<Post[]>>({
          method: 'get',
          url,
          headers: this.#headers
        })
        return response.data.data
      }
    } catch (err) {
      console.error(err)
    }
  }

  async createPost(postId: string, data: PostCreate): Promise<Post | undefined> {
    try {
      const response = await axios<Post>({
        method: 'post',
        url: `${this.#baseUrl}/post/${postId}`,
        headers: this.#headers,
        data
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async updatePost(postId: string, data: PostUpdate): Promise<Post | undefined> {
    try {
      const response = await axios<Post>({
        method: 'put',
        url: `${this.#baseUrl}/post/${postId}`,
        headers: this.#headers,
        data
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async deletePost(postId: string): Promise<Pick<Post, 'id'> | undefined> {
    try {
      const response = await axios<Pick<Post, 'id'>>({
        method: 'delete',
        url: `${this.#baseUrl}/post/${postId}`,
        headers: this.#headers
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  // Comment
  async getComment(): Promise<Comment[] | undefined>
  async getComment(id: string, by: 'post' | 'user'): Promise<Comment[] | undefined>
  async getComment(id?: string, by?: 'post' | 'user'): Promise<Comment[] | undefined> {
    let url
    switch (by) {
      case 'post': {
        url = `${this.#baseUrl}/post/${id}/comment`
        break
      }
      case 'user': {
        url = `${this.#baseUrl}/user/${id}/comment`
        break
      }
      default: {
        url = `${this.#baseUrl}/comment`
      }
    }

    try {
      const response = await axios<List<Comment[]>>({
        method: 'get',
        url,
        headers: this.#headers
      })
      return response.data.data
    } catch (err) {
      console.error(err)
    }
  }

  async getMultiComment(arrId: string[], by: 'user' | 'post'): Promise<Comment[][] | undefined> {
    let arrUrl: string[] = []
    switch (by) {
      case 'post': {
        arrUrl = arrId.map((id) => `${this.#baseUrl}/post/${id}/comment`)
        break
      }
      default: {
        arrUrl = arrId.map((id) => `${this.#baseUrl}/user/${id}/comment`)
      }
    }

    try {
      const responses = await Promise.all(
        arrUrl.map(async (url) => await axios<List<Comment[]>>({
          method: 'get',
          url,
          headers: this.#headers
        }))
      )
      return responses.map(response => response.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  async createComment(data: CommentCreate): Promise<Comment | undefined> {
    try {
      const response = await axios<Comment>({
        method: 'post',
        url: `${this.#baseUrl}/comment/create`,
        headers: this.#headers,
        data
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async deleteComment(commentId: string): Promise<Pick<Comment, 'id'> | undefined> {
    try {
      const response = await axios<Pick<Comment, 'id'>>({
        method: 'delete',
        url: `${this.#baseUrl}/comment/${commentId}`,
        headers: this.#headers
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
}
