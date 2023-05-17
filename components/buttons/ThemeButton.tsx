import React, { useState } from "react";

export function ThemeToggleButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);

        // Přepínání mezi třídami pro tělo dokumentu
        document.body.classList.toggle("dark-theme");
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
    );
}
