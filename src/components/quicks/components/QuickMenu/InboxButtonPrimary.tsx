import React, { useContext } from 'react'
import { QuickActionType, QuickDispatchContext } from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QIInbox } from '../../../ui/QuicksIcons'

export default function InboxButtonPrimary(): JSX.Element {
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <div className="relative">
      <CircleButton
        size="68"
        className="absolute top-0 right-[15px] bg-[#4F4F4F]"
        ariaLabel='Close inbox'
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.RESET })
        }}
      />
      <CircleButton
        size="68"
        className="relative ml-[15px] bg-[#8785FF] cursor-auto"
        tabIndex={-1}
      >
        <QIInbox />
      </CircleButton>
    </div>
  )
}
