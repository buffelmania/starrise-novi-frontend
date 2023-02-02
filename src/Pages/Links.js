import React from "react";
import '../components/Links/LinksStyles.css'
import Galaxy from "../assets/Galaxy-by-hristo-fidanov.jpg"






function Links() {
    return (
        <div className='Links'>
            <div className="overlay">
                <img className="img" src={Galaxy} alt=""/>

                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1L"><h3>Interessante links voor als je meer wilt weten</h3>
                            <p></p>
                            <a href="https://www.allesoversterrenkunde.nl/actueel/nieuws/">Alles over Sterrenkunde. Een website van Govert Schilling</a><p></p>
                            <a href="https://www.nasa.gov/">De website van Nasa</a><p></p>
                            <a href="https://www.esa.int/">De website van ESA</a><p></p>
                            <a href="https://spotthestation.nasa.gov/">Volg het ISS Spacestation</a><p></p>
                            <a href="https://webb.nasa.gov/">Zie hier welke foto's de James Web telescope allemaal heeft gemaakt</a>

                         </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Links;