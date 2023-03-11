import React from 'react'
import InboxItem from './InboxItem'
import { type Post, type Comment } from '../../../utils/dummyAPI/model'

type IProps = {
  post: Post[]
  comment: Comment[][]
}

export default function InboxList(props: IProps): JSX.Element {
  if (props.post == null || props.comment == null) {
    return (
      <div
        role="list"
        className="flex justify-center items-center h-full mx-[32px]"
      >
        Loading...
      </div>
    )
  }

  return (
    <div role="list" className="h-full mx-[32px] overflow-auto">
      {props.post.map((inboxData, index) => (
        <InboxItem
          key={index}
          text={inboxData.text}
          name={props.comment[index].slice(-1)[0].owner.firstName}
          message={props.comment[index].slice(-1)[0].message}
          time={props.comment[index].slice(-1)[0].publishDate}
        />
      ))}
    </div>
  )
}
