import React from "react";
import axios from 'axios';
import './../components/ZonEnMaan/ZonEnMaan.css'

function ZonEnMaan(){



    const url ='https://api.ipgeolocation.io/astronomy?apiKey=84ecef0b73d34b7c896e3e4dd9592438&location=New%20York,%20US'
    return(
        <div className="ZonEnMaan">
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>Leiden</p>
                    </div>
                    <div className="sunrise">
                        <h1>07:00</h1>
                    </div>
                    <div className="sunset">
                        <h1>16:00</h1>
                    </div>

                </div>
                <div className="bottom">

                </div>
            </div>

        </div>
    );
}

export default ZonEnMaan