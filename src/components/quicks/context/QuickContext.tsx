import { createContext } from 'react'
import { type QuickAction } from '../hooks/useQuickReducer'

export interface QuickState {
  quick: boolean
  inbox: boolean
  task: boolean
}

export const QuickStatesContext = createContext<QuickState>(null as unknown as QuickState)
export const QuickDispatchContext = createContext<React.Dispatch<QuickAction>>(null as unknown as React.Dispatch<QuickAction>)
