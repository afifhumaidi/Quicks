import React from 'react'
import moment from 'moment'
import InboxPhoto from './InboxPhoto'

type IProps = {
  text: string
  name: string
  message: string
  time: string
}

export default function InboxItem(props: IProps): JSX.Element {
  return (
    <div
      role="listitem"
      tabIndex={0}
      className="flex gap-x-[17px] mr-1 py-[22px] border-b border-slate-400 last:border-none cursor-pointer"
    >
      <InboxPhoto/>
      <div className="flex-grow">
        <div className="flex gap-x-2 mb-2">
          <h1 className="text-primaryBlue font-bold leading-[18px]">{props.text}</h1>
          <p className="flex-shrink-0 text-sm leading-4">{moment(props.time).format('MMMM D, YYYY k:mm')}</p>
        </div>
        <h2 className="mb-1 text-sm font-bold leading-4">{props.name} :</h2>
        <p className="text-xs leading-[14px]">{props.message}</p>
      </div>
    </div>
  )
}
