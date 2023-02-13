import React, { createContext, useReducer } from 'react'

export enum QuickActionType {
  TOGGLE_QUICK = 'TOGGLE_QUICK',
  ENABLE_INBOX = 'ENABLE_INBOX',
  ENABLE_TASK = 'ENABLE_TASK',
  RESET = 'RESET'
}

type QuickAction = {
  type: QuickActionType
  // payload?: number
}

type QuickState = {
  quick: boolean
  inbox: boolean
  task: boolean
}

type IProps = {
  children: JSX.Element
}

export const QuickStatesContext = createContext(null as unknown as QuickState)
export const QuickDispatchContext = createContext(
  null as unknown as React.Dispatch<QuickAction>
)

export default function QuickContextProvider({
  children
}: IProps): JSX.Element {
  const [quickStates, dispatch] = useReducer(reducer, {
    quick: false,
    inbox: false,
    task: false
  })

  return (
    <QuickStatesContext.Provider value={quickStates}>
      <QuickDispatchContext.Provider value={dispatch}>
        {children}
      </QuickDispatchContext.Provider>
    </QuickStatesContext.Provider>
  )
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
