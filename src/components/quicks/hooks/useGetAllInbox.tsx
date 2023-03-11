import { useEffect, useState } from 'react'
import DummyAPI from '../utils/dummyAPI'
import { type Post, type Comment } from '../utils/dummyAPI/model'

export default function useGetAllInbox(): [Post[], Comment[][]] {
  const [post, setPost] = useState(null as unknown as Post[])
  const [comment, setComment] = useState(null as unknown as Comment[][])

  function getCommentCallback(postData: Post[]): void {
    const dummyAPI = new DummyAPI()

    dummyAPI.getMultiComment(postData.map(e => e.id), 'post')
      .then(data => {
        if (data != null) {
          setComment(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    const dummyAPI = new DummyAPI()

    dummyAPI
      .getPost('64094b832d7001c0ede6a261', 'user')
      .then((data) => {
        if (data != null) {
          getCommentCallback(data)
          setPost(data)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return [post, comment]
}
