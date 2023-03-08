import React from 'react'

interface IProps {
  size: string
  className?: string
  ariaLabel?: string
  children?: JSX.Element | string
  tabIndex?: number
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CircleButton(props: IProps): JSX.Element {
  const style = {
    width: `${props.size}px`,
    height: `${props.size}px`
  }

  return (
    <button
      style={style}
      role="button"
      aria-label={props.ariaLabel}
      tabIndex={props.tabIndex}
      className={`grid place-items-center rounded-full ${props.className}`}
      onClick={props.onClick}
    >
      {props.children || ''}
    </button>
  )
}
