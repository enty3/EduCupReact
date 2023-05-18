import React, { useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  /*
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        document.body.classList.toggle("dark-theme");
    };
*/

  return (
    <footer className={isDarkTheme ? 'dark-theme' : ''}>
      <div className="sponsor">
        <p>Sponsored by:</p>
        {/*
        <img src="treteralogo.png" alt="adamtretera.cz" />
*/}
      </div>
      <ul>
        <li>
          <Link href="#">O nás</Link>
        </li>
        <li>
          <Link href="#">Podmínky účasti</Link>
        </li>
        <li>
          <Link href="#">Ochrana osobních údajů</Link>
        </li>
      </ul>
      <p>&copy; EduCup 2023</p>
    </footer>
  )
}
