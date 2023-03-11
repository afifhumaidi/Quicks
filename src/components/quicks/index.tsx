import React from 'react'
import QuickContextProvider from './context/QuickContext'
import QuickMenu from './components/QuickMenu'
import QuickDialog from './components/QuickDialog'
import './assets/css/main.css'

export default function Quick(): JSX.Element {
  return (
    <div id="quick" className="fixed right-[34px] bottom-[27px] flex flex-col items-end gap-y-[15px]">
      <QuickContextProvider>
        <>
          <QuickDialog/>
          <QuickMenu/>
        </>
      </QuickContextProvider>
    </div>
  )
}
