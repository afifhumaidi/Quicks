import React from 'react'
import '../assets/css/QuickMenu.css'
import QuickMenuPrimary from './quick-buttons/QuickMenuPrimary'
import QuickMenuSecondary from './quick-buttons/QuickMenuSecondary'
import QuickMenuTertiary from './quick-buttons/QuickMenuTertiary '

export default function QuickMenu(): JSX.Element {
  return (
    <div className="relative flex gap-x-[26px] items-center">
      <QuickMenuTertiary/>
      <QuickMenuSecondary/>
      <QuickMenuPrimary/>
    </div>
  )
}
