import React from 'react'
import { QIPerson } from '../../../../ui/QuicksIcons'

export default function InboxPhoto(props: { singlePerson?: boolean }): JSX.Element {
  if (props.singlePerson) {
    return (
      <div className="flex justify-center items-center rounded-full w-[34px] h-[34px] bg-primaryBlue text-white">F</div>
    )
  }

  return (
    <div className="relative w-fit ml-[17px]">
      <div className="relative z-10 flex justify-center items-center rounded-full w-[34px] h-[34px] bg-primaryBlue"><QIPerson/></div>
      <div className="absolute top-0 right-[17px] flex justify-center items-center rounded-full w-[34px] h-[34px] bg-[#E0E0E0]"><QIPerson color="rgba(0, 0, 0, 0.5)"/></div>
    </div>
  )
}
