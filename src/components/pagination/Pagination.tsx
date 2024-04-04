import clsx from 'clsx'
import style from './Pagination.module.scss'
import { IData } from '../../utils/types/IData.interface'
import { ReactNode, memo, useState } from 'react'

interface IPagination extends IData {
  onClick: () => void
  children: ReactNode
  active: boolean
}

const Pagination = memo(({ onClick, children, active }: IPagination) => {
  return (
    <div
      onClick={onClick}
      className={clsx(style.pagination, active && style.active)}
    >
      {children}
    </div>
  )
})

export default Pagination
