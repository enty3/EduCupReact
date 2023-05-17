import React from 'react';

export function Program() {
    return (
        <>
            <main>
                <section className="schedule">
                    <h2>Program</h2>
                    <p>Nabitý program zahrnuje registraci a rozlosování týmů, slavnostní zahájení turnaje, přestávku na oběd a samozřejmě hlavní součást - samotný turnaj, který nabídne skvělé zápasy plné nečekaných obratů a výborných her.</p>
                    <p>Výherci turnaje budou slavnostně vyhlášeni v závěru akce a odnesou si nejen výborné ceny, ale také pocit, že jsou nejlepšími hráči našeho turnaje.</p>
                    <strong>V případě, že dojde ke změnám v programu, nebo pokud budete potřebovat další informace, najdete je vždy na našem discordu. Nezapomeňte se k nám přidat a být v obraze o všech novinkách a aktualizacích.</strong>

                   

                    <table>
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
                    </table>
                </section>
            </main>


        </>
    )
}