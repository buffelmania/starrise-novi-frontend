import React from "react";
import '../HomeStyles.css'

import Galaxy from "../../../../../starrise-frontend-novi-eindopdracht/src/assets/Galaxy-by-hristo-fidanov.jpg"

function Homes() {
    return(
        <div className='homes'>

            <div className="overlay">
            <img className="img" src={Galaxy} alt=""/>

            <div className="content">

                <h2>Welkom op de website van StarRise. HIer vind je weetjes over ons zonnestelsel,
                    interessante links en kan je als je bent ingelogd, zien hoelaat de zon en maan bij jou opkomen en ondergaan.</h2>
            </div>
        </div>
        </div>
    )

}

export default Homes