import React, { useState } from "react";

export function ThemeToggleButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);

        // Přepínání mezi třídami pro tělo dokumentu
        document.body.classList.toggle("dark-theme");
    };

    return (
        <button className="round-button" onClick={toggleTheme}>
            {isDarkTheme ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
        </button>
    );
}
