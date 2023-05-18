import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ThemeButton } from '@/components/ThemeButton'

interface ILayoutProps {
  children: ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div
      className={
        'text-neutral-950 bg-white dark:text-white dark:bg-neutral-950'
      }
    >
      <ThemeButton />
      <Navbar />
      <div className={'max-w-screen-lg m-auto'}>{children}</div>
      <Footer />
    </div>
  )
}
