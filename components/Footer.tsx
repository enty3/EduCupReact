import React, {useState} from "react";


export function Footer() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        document.body.classList.toggle("dark-theme");
    };

    
    return (
        <footer className={isDarkTheme ? "dark-theme" : ""}>
            <div className="sponsor">
                <p>Sponsored by:</p>
                <img src="treteralogo.png" alt="adamtretera.cz" />
            </div>
            <ul>
                <li>
                    <a href="#">O nás</a>
                </li>
                <li>
                    <a href="#">Podmínky účasti</a>
                </li>
                <li>
                    <a href="#">Ochrana osobních údajů</a>
                </li>
            </ul>
            <p>&copy; EduCup 2023</p>
        </footer>
    );
}
