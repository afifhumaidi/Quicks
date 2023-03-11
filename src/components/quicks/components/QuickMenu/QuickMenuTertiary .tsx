import React, { useContext } from 'react'
import TaskButtonSecondary from './TaskButtonSecondary'
import { QuickStatesContext } from '../../context/QuickContext'

export default function QuickMenuTertiary (): JSX.Element | null {
  const quickStates = useContext(QuickStatesContext)

  if (quickStates.quick) {
    return (
      <TaskButtonSecondary label/>
    )
  }

  return null
}
