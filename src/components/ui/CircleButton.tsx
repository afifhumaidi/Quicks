import React from 'react'

interface PropType {
  size: string
  className?: string
  children?: JSX.Element | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CircleButton(props: PropType): JSX.Element {
  const style = {
    width: `${props.size}px`,
    height: `${props.size}px`
  }

  return (
    <button
      style={style}
      className={`grid place-items-center rounded-full ${props.className}`}
      onClick={props.onClick}
    >
      {props.children || ''}
    </button>
  )
}
