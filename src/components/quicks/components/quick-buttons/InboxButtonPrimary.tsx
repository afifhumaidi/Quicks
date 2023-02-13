import React, { useContext } from 'react'
import { QuickActionType, QuickDispatchContext } from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QIInbox } from '../../../ui/QuicksIcons'

type IProps = {
  resetFirstRender: () => void
}

export default function InboxButtonPrimary({ resetFirstRender }: IProps): JSX.Element {
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <div className="relative">
      <CircleButton
        size="68"
        className="absolute top-0 right-[15px] bg-[#4F4F4F]"
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.RESET })
          resetFirstRender()
        }}
      />
      <CircleButton
        size="68"
        className="relative ml-[15px] bg-[#8785FF] cursor-auto"
      >
        <QIInbox />
      </CircleButton>
    </div>
  )
}
