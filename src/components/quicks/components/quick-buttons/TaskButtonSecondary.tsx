import React, { useContext } from 'react'
import {
  QuickActionType,
  QuickDispatchContext,
  QuickStatesContext
} from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QITask } from '../../../ui/QuicksIcons'

export default function TaskButtonSecondary(): JSX.Element {
  const quicksStates = useContext(QuickStatesContext)
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <div
      className="relative"
      // className={
      //   'relative ' +
      //   (quicksStates.quick ? 'animateTaskIn' : 'animateTaskOut')
      // }
    >
      {quicksStates.quick && (
        <label className="absolute top-[-30px] right-0 left-0 leading-4 text-white text-center">
          Task
        </label>
      )}
      <CircleButton
        className="bg-[#F2F2F2]"
        ariaLabel="task"
        size="60"
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.ENABLE_TASK })
        }}
      >
        <QITask color="#F8B76B" />
      </CircleButton>
    </div>
  )
}
