import Link from 'next/link';

import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import {useState} from 'react';
import {app} from "@/firebase";
import {useAtom} from "jotai";
import {authAtom} from "@/atoms/authAtom";

export function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [user, setUser] = useAtom(authAtom);

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

    const handleSignOut = () => {
        const authInstance = getAuth();
        signOut(authInstance);
        setUser(null);
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);

    };

    return (
        <header className='bg-white dark:bg-neutral-700 flex items-center justify-between p-3 shadow'>
            <Link href='/'>
                <div className='relative w-fit'>
                    <img src='/images/educup-logo.png' alt='Educup Logo' width={150} height={150} />

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
                        {user?.name ? (
                            <div>
                                {user?.name && user.userPic ? (
                                    <div className="relative">
                                        <button
                                            onClick={handleDropdownToggle}
                                            className="flex items-center space-x-2 text-white"
                                        >
                                    <h3>{user.name}<img src={user.userPic} alt={"UserProfilePicture"} width={30} height={30}/></h3>
                                        </button>
                                        {showDropdown && (
                                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    <button onClick={handleSignOut}>SignOut</button>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    Option 2
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    Option 3
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <h1></h1>
                                )}

                            </div>
                        ) : (
                            <button onClick={signIn}>Sign In</button>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
