import { FaCheck } from 'react-icons/fa6'
import style from './Checkbox.module.scss'
import clsx from 'clsx'

export default function Checkbox({ state }: { state: boolean }) {
  return (
    <div className={clsx(style.checkbox, state && style.checked)}>
      <FaCheck />
    </div>
  )
}
