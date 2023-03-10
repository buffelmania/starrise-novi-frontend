import React from "react";
import './LinksStyles.css'
import Galaxy from "../../assets/Galaxy-by-hristo-fidanov.jpg"






function Links() {
    return (
        <div className='Links'>
            <div className="overlay">
                <img className="img" src={Galaxy} alt=""/>

                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1L"><h3>Interessante links voor als je meer wilt weten</h3>
                            <p></p>
                            <a href="src/Pages/LinksPage/Links">Alles over Sterrenkunde. Een website van Govert Schilling</a><p></p>
                            <a href="src/Pages/LinksPage/Links">De website van Nasa</a><p></p>
                            <a href="src/Pages/LinksPage/Links">De website van ESA</a><p></p>
                            <a href="src/Pages/LinksPage/Links">Volg het ISS Spacestation</a><p></p>
                            <a href="src/Pages/LinksPage/Links">Zie hier welke foto's de James Web telescope allemaal heeft gemaakt</a>

                         </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Links;