import React from 'react'
import QuicksMenu from './QuickMenu'
import useQuickReducer from './hooks/useQuickReducer'
import { QuickStatesContext, QuickDispatchContext } from './context/QuickContext'

export default function Quick(): JSX.Element {
  const [quickStates, dispatch] = useQuickReducer()

  return (
    <div className="fixed right-[34px] bottom-[27px] flex flex-col items-end gap-y-[15px]">
      <QuickStatesContext.Provider value={quickStates}>
        <QuickDispatchContext.Provider value={dispatch}>
          {/* Content Dialog */}
          {/* Menu Button */}
          <QuicksMenu />
        </QuickDispatchContext.Provider>
      </QuickStatesContext.Provider>
    </div>
  )
}
