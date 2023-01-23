import React from "react";
import {useState} from "react";
import axios from 'axios';
import '../components/ZonEnMaan/ZonEnMaanStyles.css'
import {useEffect} from "react";

function ZonEnMaan(){
const [data,setData] = useState({})
const [location, setLocation] = useState('')

    const url ='https://api.ipgeolocation.io/astronomy?apiKey=84ecef0b73d34b7c896e3e4dd9592438&location=${location}'


   const searchLocation = useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=84ecef0b73d34b7c896e3e4dd9592438&location=${location}`);
                console.log(response.data);
                setData(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e);
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    /*const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }*/

    return(
        <div className="ZonEnMaan">
            <div className="container">
                <div className="search">
                    <input
                        value={location}
                        onChange={event => setLocation(event.target.value)}
                        onKeyUp={searchLocation}
                        placeholder='Enter Location'
                        type="text"/>
                </div>
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
                    <div className="DistanceToSun">
                        <p className='bold'>100000</p>
                    <p>Afstand tot de zon</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ZonEnMaan