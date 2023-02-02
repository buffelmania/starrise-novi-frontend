import React from "react";
import '../components/Links/LinksStyles.css'
import Galaxy from "../assets/Galaxy-by-hristo-fidanov.jpg"






function Links() {
    return (
        <div className='Links'>
            <div className="overlay">
                <img className="img" src={Galaxy}/>

                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1L"><h4>Zien hoelaat de Zon en maan opkomen en ondergaan</h4>
                            <h6>Over ter wereld</h6></div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Links;