import React, { useContext } from 'react'
import { QuickActionType, QuickDispatchContext } from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QITask } from '../../../ui/QuicksIcons'

export default function TaskButtonPrimary(): JSX.Element {
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <div className="relative">
      <CircleButton
        size="68"
        className="absolute top-0 right-[15px] bg-[#4F4F4F]"
        ariaLabel='Close task'
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.RESET })
        }}
      />
      <CircleButton
        size="68"
        className="relative ml-[15px] bg-[#F8B76B] cursor-auto"
        tabIndex={-1}
      >
        <QITask />
      </CircleButton>
    </div>
  )
}
