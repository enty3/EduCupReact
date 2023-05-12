import React from "react";


export function  Navbar(){
return (
    <header>
        <div className="logo">
            <a href="EduCupV2.html"><img src="educup-low-resolution-logo-color-on-transparent-background%20(2).png" alt="EduCup 2023" /></a>
        </div>
        <nav>
            <ul>
                <li><a href="uvod.html">Úvod</a></li>
                <li><a href="program.html">Program</a></li>
                <li><a href="prihlaseni.html">Přihlášení</a></li>
                <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>
)
}