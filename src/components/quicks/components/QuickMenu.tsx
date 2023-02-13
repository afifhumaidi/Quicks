import React, { useContext, useEffect, useRef } from 'react'
import { QuickStatesContext } from '../context/QuickContext'
import '../assets/css/QuickMenu.css'
import QuickButtonPrimary from './quick-buttons/QuickButtonPrimary'
import TaskButtonSecondary from './quick-buttons/TaskButtonSecondary'
import InboxButtonSecondary from './quick-buttons/InboxButtonSecondary'
import InboxButtonPrimary from './quick-buttons/InboxButtonPrimary'
import TaskButtonPrimary from './quick-buttons/TaskButtonPrimary'

export default function QuickMenu(): JSX.Element {
  const quicksStates = useContext(QuickStatesContext)
  const isFirstRender = useRef(true)

  useEffect(() => {
    return () => {
      isFirstRender.current = false
    }
  })

  function resetFirstRender(): void {
    isFirstRender.current = true
  }

  // First Render
  if (isFirstRender.current) {
    return <QuickButtonPrimary />
  }

  // Task Button Active
  if (quicksStates.task) {
    return (
      <div className="relative flex gap-x-[16px] items-center">
        <InboxButtonSecondary />
        <TaskButtonPrimary resetFirstRender={resetFirstRender} />
      </div>
    )
  }

  // Inbox Button active
  if (quicksStates.inbox) {
    return (
      <div className="relative flex gap-x-[16px] items-center">
        <TaskButtonSecondary />
        <InboxButtonPrimary resetFirstRender={resetFirstRender} />
      </div>
    )
  }

  // Default
  return (
    <div className="relative flex gap-x-[26px] items-center">
      <TaskButtonSecondary />
      <InboxButtonSecondary />
      <QuickButtonPrimary resetFirstRender={resetFirstRender} />
    </div>
  )
}
