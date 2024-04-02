import { ReactNode } from 'react'
import style from './Button.module.scss'

import clsx from 'clsx'

interface IProps {
  children: ReactNode
  size?: string
  other?: () => void
}

export default function Button({ children, size = 'sm', other }: IProps) {
  return (
    <button
      {...other}
      className={clsx(style.button, size === 'xl' ? style.xl : style.sm)}
    >
      {children}
    </button>
  )
}
