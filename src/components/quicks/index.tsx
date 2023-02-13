import React from 'react'
import QuickMenu from './components/QuickMenu'
import QuickContextProvider from './context/QuickContext'

export default function Quick(): JSX.Element {
  return (
    <div className="fixed right-[34px] bottom-[27px] flex flex-col items-end gap-y-[15px]">
      <QuickContextProvider>
        {/* Content Dialog */}
        {/* Menu Button */}
        <QuickMenu />
      </QuickContextProvider>
    </div>
  )
}
