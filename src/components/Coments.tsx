import React, { useState } from 'react';

const Komentare = () => {
    const [komentare, setKomentare] = useState([]);
    const [novyKomentar, setNovyKomentar] = useState('');

    const handleInputChange = (event) => {
        setNovyKomentar(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (novyKomentar.trim() !== '') {
            const novyKomentarObjekt = {
                id: Date.now(),
                text: novyKomentar
            };
            setKomentare([...komentare, novyKomentarObjekt]);
            setNovyKomentar('');
        }
    };

    return (
        <div>
            <h2>Komentáře</h2>
            <ul>
                {komentare.length === 0 ? (
                    <li>Žádné komentáře</li>
                ) : (
                    komentare.map((komentar) => (
                        <li key={komentar.id}>{komentar.text}</li>
                    ))
                )}
            </ul>
            <form onSubmit={handleFormSubmit}>
        <textarea
            value={novyKomentar}
            onChange={handleInputChange}
            placeholder="Napište komentář..."
        />
                <button type="submit">Přidat komentář</button>
            </form>
        </div>
    );
};

export default Komentare;
