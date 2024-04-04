import clsx from 'clsx'
import style from './Filters.module.scss'
import { useState } from 'react'
import Checkbox from '../ui/checkbox/Checkbox'

// interface IProps {
//   check: {
//     from10000to20000: boolean
//     from20000to40000: boolean
//     from40000: boolean
//   }
//   setCheck: () => void
// }

export default function Filters({ check, setCheck }: any) {
  // const [check, setCheck] = useState<IProps>(checkbox)

  const [price, setPrice] = useState(true)
  const [company, setCompany] = useState(true)

  console.log(check)

  return (
    <div className={style.filters}>
      <section className={style.section}>
        <div className={style.main}>
          <h2 className={style.title}>Price:</h2>
          <div
            className={style.handler}
            onClick={() => setPrice(prev => !prev)}
          >
            hide
          </div>
        </div>
        <div
          className={style.content}
          style={{
            maxHeight: price ? 1000 : 0,
            opacity: price ? 1 : 0,
          }}
        >
          <ul className={style.list}>
            <li
              className={style.item}
              onClick={() =>
                setCheck((prev: { from10000to20000: boolean }) => ({
                  ...prev,
                  from10000to20000: !prev.from10000to20000,
                }))
              }
            >
              <Checkbox state={check.from10000to20000} />
              <p>10.000-20.000</p>
            </li>
            <li
              onClick={() =>
                setCheck((prev: { from20000to40000: boolean }) => ({
                  ...prev,
                  from20000to40000: !prev.from20000to40000,
                }))
              }
              className={style.item}
            >
              <Checkbox state={check.from20000to40000} />
              <p>20.000-40.000</p>
            </li>
            <li
              onClick={() =>
                setCheck((prev: { from40000: boolean }) => ({
                  ...prev,
                  from40000: !prev.from40000,
                }))
              }
              className={style.item}
            >
              <Checkbox state={check.from40000} />
              <p>40.000+</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={style.section}>
        <div className={style.main}>
          <h2 className={style.title}>Company:</h2>
          <div
            className={style.handler}
            onClick={() => setCompany(prev => !prev)}
          >
            hide
          </div>
        </div>
        <div
          className={style.content}
          style={{
            maxHeight: company ? 1000 : 0,
            opacity: company ? 1 : 0,
          }}
        >
          <ul className={style.list}>
            <li className={style.item}>
              <div className={clsx(style.checkbox, style.checked)}></div>
              <p>Apple</p>
            </li>
            <li className={style.item}>
              <div className={style.checkbox}></div>
              <p>Samsung</p>
            </li>
            <li className={style.item}>
              <div className={style.checkbox}></div>
              <p>Xiaomi+</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={style.section}>
        {/* <Button>Применить</Button> */}
      </section>
    </div>
  )
}
