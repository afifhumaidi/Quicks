import React, { useContext } from 'react'
import { QuickActionType, QuickDispatchContext } from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QIThunder } from '../../../ui/QuicksIcons'

type IProps = {
  resetFirstRender?: () => void
}

export default function QuickButtonPrimary({ resetFirstRender }: IProps): JSX.Element {
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <CircleButton
        size="68"
        ariaLabel="quick"
        className="relative bg-primaryBlue"
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.TOGGLE_QUICK })
          typeof resetFirstRender === 'function' && resetFirstRender()
        }}
      >
        <QIThunder />
      </CircleButton>
  )
}
