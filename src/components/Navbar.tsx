import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <header
      className={
        'bg-white dark:bg-neutral-700 flex items-center justify-between p-3 shadow'
      }
    >
      <Link href="/">
        <div className={'relative w-6 h-6'}>
          <Image fill src={'/images/adamos.jpg'} alt={'Educup Logo'} />
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">Úvod</Link>
          </li>
          <li>
            <Link href="/program">Program</Link>
          </li>
          <li>
            <Link href="/prihlaseni">Prihlaseni</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
