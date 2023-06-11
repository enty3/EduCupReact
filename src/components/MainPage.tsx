import React, { useState } from 'react'
import { ThemeButton } from './ThemeButton'
import Image from 'next/image'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { app } from '@/firebase'
import { useAtom } from 'jotai'
import { authAtom } from '@/atoms/authAtom'

export function MainPage() {
  const [user, setUser] = useAtom(authAtom)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleSignOut = () => {
    const authInstance = getAuth()
    signOut(authInstance)
    setUser(null)
  }

  /*    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        document.body.classList.toggle("dark-theme");
    };*/

  return (
    <>
      <section className="intro">
        <h2>Vítejte na EduCup 2023!</h2>
        <p>
          Těšíme se, že se budeme moci setkat na našem školním e-sportovém
          turnaji. Akce se uskuteční v domácím prostředí jednotlivých hráčů dne
          20. května 2023. Připravujeme pro vás bohatý program a těšíme se na
          vaši účast!
        </p>
      </section>
      <br />
      <section className="schedule">
        <h2>Program</h2>
        <p>Zde je hrubý přehled toho, co vás na EduCup 2023 čeká:</p>
        <table>
          <tbody>
            <tr>
              <th>Čas</th>
              <th>Program</th>
            </tr>
            <tr>
              <td>8:00</td>
              <td>Registrace a rozlosování týmů</td>
            </tr>
            <tr>
              <td>9:00</td>
              <td>Zahájení turnaje</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>Přestávka na oběd</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>Pokračování turnaje</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>Slavnostní vyhlášení výsledků</td>
            </tr>
          </tbody>
        </table>
      </section>
      <br />

      <br />
      <br />
      <section className="games">
        <h2>Hry</h2>
        <p>Na EduCup 2023 se bude hrát tato hra:</p>
        <ul>
          <li>Counter-Strike: Global Offensive</li>
        </ul>
      </section>
      <br />
      <br />
      <section className="register">
        <h2>Přihlášení</h2>
        <p>
          Pokud chcete s týmem soutěžit v EduCup 2023, vyplňte prosím přihlášku:
        </p>
        <form action="https://formsubmit.co/c0c2401d00377313d34b4f00d67c8813" method="post">
          <label>{user?.email}</label>
          <label htmlFor="team-name">Jméno týmu:</label>
          <input
            className={isDarkTheme ? 'dark-theme' : ''}
            type="text"
            id="team-name"
            name="team-name"
            required
          />
          <label htmlFor="game-select">Vyberte hru:</label>
          <select
            className={isDarkTheme ? 'dark-theme' : ''}
            id="game-select"
            name="game-select"
            required
          >
            <option value="csgo">Counter-Strike: Global Offensive</option>
          </select>
          <label htmlFor="team-members">Seznam členů týmu (max. 5):</label>
          <textarea
            className={isDarkTheme ? 'dark-theme' : ''}
            id="team-members"
            name="team-members"
            required
          ></textarea>
          <input>
            {user?.email ? (
                <div className="relative">
                  <a
                      type="submit"
                      className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>

                    <span className="relative">Odeslat Přihlášku</span>
                  </a>
                </div>
            ) : (
                <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50" style={{ pointerEvents: 'none' }}>
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
                  <span className="relative">Přihlaš se pro odeslání!</span>
                </a>

            )}
          </input>

        </form>
      </section>

      <h2>Živý stream</h2>
      <p>Sledujte naši akci v přímém přenosu na Twitchi:</p>
    </>
  )
}
