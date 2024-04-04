import { ReactNode } from 'react'
import style from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <div className={style.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
