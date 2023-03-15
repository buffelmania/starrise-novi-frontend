import React from "react";
import '../HomeStyles.css'

import Galaxy from "../../../assets/Galaxy-by-hristo-fidanov.jpg"

function Homes() {
    return (
        <section className="homes">
            <div className="overlay">
                <img className="img" src={Galaxy} alt="Achtergrondafbeelding van de Melkweg" />

                <div className="content">
                    <header>
                        <h1>StarRise</h1>
                    </header>

                    <main>
                        <h2>Ontdek ons zonnestelsel
                            Welkom op de website van StarRise. Hier vind je weetjes over ons zonnestelsel, interessante links en kan je als je bent ingelogd, zien hoelaat de zon en maan bij jou opkomen en ondergaan.</h2>
                    </main>


                </div>
            </div>
        </section>
    )
}

export default Homes
