import React, { useContext } from 'react'
import {
  QuickActionType,
  QuickDispatchContext
} from '../../context/QuickContext'
import CircleButton from '../../../ui/CircleButton'
import { QIInbox } from '../../../ui/QuicksIcons'

type IProps = {
  label?: boolean
}

export default function InboxButtonSecondary(props: IProps): JSX.Element {
  const dispatchQuicksStates = useContext(QuickDispatchContext)

  return (
    <div className="relative">
      {props.label && (
        <label className="absolute top-[-30px] right-0 left-0 leading-4 text-white text-center">
          Inbox
        </label>
      )}
      <CircleButton
        size="60"
        ariaLabel="inbox"
        className="bg-[#F2F2F2]"
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.ENABLE_INBOX })
        }}
      >
        <QIInbox color="#8885FF" />
      </CircleButton>
    </div>
  )
}
