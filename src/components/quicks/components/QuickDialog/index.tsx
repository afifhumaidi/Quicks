import React, { useContext } from 'react'
import { QuickStatesContext } from '../../context/QuickContext'
import InboxDialog from './InboxDialog'
import TaskDialog from './TaskDialog'

export default function QuickDialog(): JSX.Element | null {
  const quickStates = useContext(QuickStatesContext)

  if (quickStates.inbox) {
    return <InboxDialog />
  }

  // if (quickStates.task) {
  //   return <TaskDialog />
  // }

  return null
}
