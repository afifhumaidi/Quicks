import React from 'react'
import { QISearch } from '../../../ui/QuicksIcons'
import InboxList from './inbox/InboxList'
import useGetAllInbox from '../../hooks/useGetAllInbox'

export default function InboxDialog(): JSX.Element {
  const [post, comment] = useGetAllInbox()

  return (
    <div className="flex flex-col w-[734px] h-[737px] py-[24px] rounded-lg bg-white">
      <div className="flex items-center gap-x-[10px] mx-[32px] px-[50px] py-[10px] border border-slate-400 rounded-lg">
        <input
          aria-label="search"
          tabIndex={0}
          role="searchbox"
          className="w-full outline-none text-sm placeholder:text-slate-600"
          type="text"
          placeholder="Search"
        />
        <QISearch />
      </div>
      <InboxList post={post} comment={comment}/>
    </div>
  )
}
