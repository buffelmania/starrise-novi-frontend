import React from "react";
import './LinksStyles.css'
import Galaxy from "../../assets/Galaxy-by-hristo-fidanov.jpg"

function Links() {
    return (
        <section>
            <div className="Links">
            <div className="overlay">
                <img className="img" src={Galaxy} alt="Achtergrondafbeelding van de Melkweg" />

                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1L">


                    <header>
                        <h3>Interessante links voor als je meer wilt weten</h3>
                    </header>

                    <main>

                        <ul className="link-list">
                            <li><a href="https://www.allesoversterrenkunde.nl/actueel/nieuws/">Alles over Sterrenkunde. Een website van Govert Schilling</a></li>
                            <li><a href="https://www.nasa.gov/">De website van NASA</a></li>
                            <li><a href="https://www.esa.int/">De website van ESA</a></li>
                            <li><a href="https://webb.nasa.gov/">Bekijk foto's van de James Webb-telescoop</a></li>
                        </ul>


                    </main>

                    <footer>
                        <p>&copy; 2023 StarRise</p>
                    </footer>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Links;
