import { useState } from 'react'
import style from './Select.module.scss'

interface IProps {
  setSortedBy: (value: string) => void
}

export default function Select({ setSortedBy }: IProps) {
  return (
    <select onChange={e => setSortedBy(e.target.value)}>
      <option value='-price'>Сначала дешевле</option>
      <option value='price'>Сначала дороже</option>
    </select>
  )
}
