import React, { useContext } from 'react'
import InboxButtonSecondary from './InboxButtonSecondary'
import { QuickStatesContext } from '../../context/QuickContext'
import TaskButtonSecondary from './TaskButtonSecondary'

export default function QuickMenuSecondary(): JSX.Element | null {
  const quickStates = useContext(QuickStatesContext)

  if (quickStates.quick) {
    return (
      <InboxButtonSecondary label/>
    )
  }

  if (quickStates.task) {
    return (
      <InboxButtonSecondary/>
    )
  }

  if (quickStates.inbox) {
    return (
      <TaskButtonSecondary/>
    )
  }

  return null
}
