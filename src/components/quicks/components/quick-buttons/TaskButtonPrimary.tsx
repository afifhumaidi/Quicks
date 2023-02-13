import React, { useContext } from 'react'
import { QuickActionType, QuickDispatchContext } from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QITask } from '../../../ui/QuicksIcons'

type IProps = {
  resetFirstRender: () => void
}

export default function TaskButtonPrimary({ resetFirstRender }: IProps): JSX.Element {
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
        className="relative ml-[15px] bg-[#F8B76B] cursor-auto"
      >
        <QITask />
      </CircleButton>
    </div>
  )
}
