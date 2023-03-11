import React from 'react'
import QuickMenuPrimary from './QuickMenuPrimary'
import QuickMenuSecondary from './QuickMenuSecondary'
import QuickMenuTertiary from './QuickMenuTertiary '

export default function QuickMenu(): JSX.Element {
  return (
    <div className="relative flex gap-x-[26px] items-center">
      <QuickMenuTertiary/>
      <QuickMenuSecondary/>
      <QuickMenuPrimary/>
    </div>
  )
}
