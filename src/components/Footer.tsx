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
    <footer className="bg-white dark:bg-neutral-700 p-4 text-center shadow-md mt-0">
      <div className="flex items-center justify-center mb-2">
        <p className="mr-2 text-sm">Sponsored by:</p>
        {/* <img src="treteralogo.png" alt="adamtretera.cz" /> */}
      </div>
      <ul className="flex justify-center mt-2">
        <li className="mx-2">O nás</li>
        <li className="mx-2">Podmínky účasti</li>
        <li className="mx-2">Ochrana osobních údajů</li>
      </ul>
      <p className="text-sm">&copy; EduCup 2023</p>
    </footer>
  )
}
