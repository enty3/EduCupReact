import Link from 'next/link';
import Image from 'next/image';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useState } from 'react';

export function Navbar() {
  const [user, setUser] = useState<string | null>(null);

  const signIn = async () => {
    const authInstance = getAuth();
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(authInstance, provider);
    setUser(res.user.displayName);
  };

  const handleSignOut = () => {
    const authInstance = getAuth();
    signOut(authInstance);
    setUser(null);
  };

  return (
      <header className='bg-white dark:bg-neutral-700 flex items-center justify-between p-3 shadow'>
        <Link href='/'>
          <div className='relative w-6 h-6'>
            <Image src='/images/adamos.jpg' alt='Educup Logo' width={24} height={24} />
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href='/'>Úvod</Link>
            </li>
            <li>
              <Link href='/program'>Program</Link>
            </li>
            <li>
              <Link href='/prihlaseni'>Prihlaseni</Link>
            </li>
            <li>
              <Link href='/kontakt'>Kontakt</Link>
            </li>
            <li>
              {user ? (
                  <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                  <button onClick={signIn}>Sign In</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
  );
}
