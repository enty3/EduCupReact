import React from "react";
import Link from "next/link";


export function  Navbar(){
return (
    <header>
        <div className="logo">
            <a href="EduCupV2.html"><img src="educup-low-resolution-logo-color-on-transparent-background%20(2).png" alt="EduCup 2023" /></a>
        </div>
        <nav>
            <ul>
                <li><Link href="/">Úvod</Link></li>
                <li><Link href="/program">Program</Link></li>
                <li><Link href="/prihlaseni">Prihlaseni</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    </header>
)
}