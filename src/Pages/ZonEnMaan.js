import React from "react";
import {useState} from "react";
import axios from 'axios';
import '../components/ZonEnMaan/ZonEnMaanStyles.css'
import {useEffect} from "react";
import '../components/ZonEnMaan/searchBar/SearchBar';
import SearchBar from "../components/ZonEnMaan/searchBar/SearchBar";
import SunMoon from "../assets/Zon en Maan.png";


function ZonEnMaan(){
const [data,setData] = useState({})
const [location, setLocation] = useState('')

    const url ='https://api.ipgeolocation.io/astronomy?apiKey=d793088378b847f6b524c3091aa6ecfd&location=${location}'



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=d793088378b847f6b524c3091aa6ecfd&location=${location}`);
                console.log(response.data);
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
        }

       if (location) {
            fetchData();
        }
    }, [location]);

    return(
        <div className='zonEnMaan'>
            <div className="overlay">
                <img className="img" src={SunMoon}/>
                <div className="content">
                    <div className="grid-container">
                    <div className="grid-item item11">


                    {/*HEADER -------------------- */}

                        <SearchBar setLocationHandler={setLocation}/>

                        <span className="location-details">
            {Object.keys(data).length > 0 &&
                <>

                    <h3>{data.name}</h3>
                    <h2>Zonsopkomst: {data.sunrise}</h2>
                    <h2>Zonsondergang: {data.sunset}</h2>
                   <h2>Afstand tot de zon: {data.sun_distance}</h2>

                </>

            }

          </span>









                </div>
                    <div className="grid-item item21">


                        <span className="location-details">
            {Object.keys(data).length > 0 &&
                <>

                    <h3>{data.name}</h3>
                    <h2>Maansopkomst: {data.moonrise}</h2>
                    <h2>Maansondergang: {data.moonset}</h2>
                    <h2>Afstand tot de maan: {data.moon_distance}</h2>

                </>

            }

          </span>
                    </div>
                    </div>




        </div>
            </div>
        </div>

    );
}

export default ZonEnMaan;