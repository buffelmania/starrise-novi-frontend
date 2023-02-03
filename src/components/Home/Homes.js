import React from "react";
import './HomeStyles.css'

import Galaxy from "../../../../starrise-frontend-novi-eindopdracht/src/assets/Galaxy-by-hristo-fidanov.jpg"

function Homes() {
    return(
        <div className='homes'>

            <div className="overlay">
            <img className="img" src={Galaxy} alt=""/>

            <div className="content">
                <h1>Zien hoelaat de Zon en maan opkomen en ondergaan</h1>
                <h2>Over ter wereld</h2>
            </div>
        </div>
        </div>
    )

}

export default Homes