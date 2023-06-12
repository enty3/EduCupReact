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
import MyTwitchStream from "@/components/TwitchEmbedVideo";

export function MainPage() {
  const [user, setUser] = useAtom(authAtom)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const signIn = async () => {
    const authInstance = getAuth(app);
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(authInstance, provider).then((user)=> setUser({
      name: user.user.displayName,
      email: user.user.email,
      token: user.user.uid,
      userPic: user.user.photoURL
    }) );
  };



  function validateEmail(event: any | null) {
    const userEmail = event.target.querySelector('#user-email').value;
    const isValidEmail = userEmail.endsWith('@educanet.cz');

    if (!isValidEmail) {
      event.preventDefault(); // Zabraňuje odeslání formuláře
      alert('Pouze uživatelé s emailovou adresou @educanet.cz mohou odeslat formulář.');
    }
  }

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
        <form  action="https://formsubmit.co/c0c2401d00377313d34b4f00d67c8813"
               method="post"
               onSubmit={validateEmail}>
          <div>
            {user?.email ? (
                <input
                    className={isDarkTheme ? 'dark-theme' : ''}
                    type="text"
                    readOnly
                    value={user?.email ?? ''}
                    id="user-email"
                    name="user-email"
                    required
                />
            ) : (
                <h6></h6>
            )}
          </div>


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
          <div>
            {user?.email ? (
                <input
                    type="submit"
                    value="Odeslat přihlášku"
                    className="bg-white border border-black hover:bg-black hover:text-white dark:bg-neutral-000 text-black  nav button font-bold  text-base  rounded-md px-4 py-2 cursor-pointer"
                />
            ) : (
                <button
                    onClick={signIn}
                    className="bg-white border border-black hover:bg-black hover:text-white dark:bg-neutral-000 text-black nav btn font-bold text-base rounded-md px-4 py-2 cursor-pointer"
                >
                  Přihlaš se pro odeslání!
                </button>

            )}
          </div>

        </form>
      </section>
      <br></br>
      <h2>Živý stream</h2>
      <p>Sledujte naši akci v přímém přenosu na Twitchi:</p>
      <br></br>
<MyTwitchStream>gg</MyTwitchStream>
    </>
  )
}
