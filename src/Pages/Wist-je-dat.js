import React from "react";
import SolarEclipse from "../assets/jongsun-lee-F-pSZO_jeE8-unsplash.jpg";
import '../components/WistJeDat/WistJeDat_Styles.css'







function Wist() {
    return (
        <div className='Wist'>

            <div className="overlay">
            <img className="img" src={SolarEclipse}/>
                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1">1</div>
                        <div className="grid-item item2">2</div>
                        <div className="grid-item item3">3</div>
                        <div className="grid-item item4">4</div>
                        <div className="grid-item item5">5</div>
                        <div className="grid-item item6">6</div>
                    </div>


                </div>

            </div>




        </div>
    );
}

export default Wist;