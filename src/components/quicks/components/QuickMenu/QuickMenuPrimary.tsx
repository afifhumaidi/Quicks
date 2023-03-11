import React, { useContext } from 'react'
import QuickButtonPrimary from './QuickButtonPrimary'
import { QuickStatesContext } from '../../context/QuickContext'
import InboxButtonPrimary from './InboxButtonPrimary'
import TaskButtonPrimary from './TaskButtonPrimary'

export default function QuickMenuPrimary(): JSX.Element {
  const quickStates = useContext(QuickStatesContext)

  if (quickStates.inbox) {
    return (
      <InboxButtonPrimary/>
    )
  }

  if (quickStates.task) {
    return (
      <TaskButtonPrimary/>
    )
  }

  return (
    <QuickButtonPrimary/>
  )
}
