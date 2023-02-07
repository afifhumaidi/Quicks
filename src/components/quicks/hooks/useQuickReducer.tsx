import { useReducer } from 'react'
import { type QuickState } from '../context/QuickContext'

export enum QuickActionType {
  TOGGLE_QUICK = 'TOGGLE_QUICK',
  ENABLE_INBOX = 'ENABLE_INBOX',
  ENABLE_TASK = 'ENABLE_TASK',
  RESET = 'RESET',
}

export interface QuickAction {
  type: QuickActionType
  // payload?: number
}

function reducer(state: QuickState, action: QuickAction): QuickState {
  const { type } = action

  switch (type) {
    case QuickActionType.TOGGLE_QUICK: {
      return {
        quick: !state.quick,
        inbox: false,
        task: false
      }
    }
    case QuickActionType.ENABLE_INBOX: {
      return {
        quick: false,
        inbox: true,
        task: false
      }
    }
    case QuickActionType.ENABLE_TASK: {
      return {
        quick: false,
        inbox: false,
        task: true
      }
    }
    default: {
      return { quick: false, inbox: false, task: false }
    }
  }
}

export default function useQuickReducer(): [
  QuickState,
  React.Dispatch<QuickAction>
] {
  const [quickStates, dispatch] = useReducer(reducer, {
    quick: false,
    inbox: false,
    task: false
  })
  return [quickStates, dispatch]
}
