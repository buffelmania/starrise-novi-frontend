import React from "react";
import {useState} from "react";
import axios from 'axios';
import '../components/ZonEnMaan/ZonEnMaanStyles.css'
import {useEffect} from "react";
import '../components/ZonEnMaan/searchBar/SearchBar';
import '../components/ZonEnMaan/tabBarMenu/TabBarMenu';
import SearchBar from "../components/ZonEnMaan/searchBar/SearchBar";
import TabBarMenu from "../components/ZonEnMaan/tabBarMenu/TabBarMenu";

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
        <div className="ZonEnMaan">
            <div className="container">
                <div className="weather-container">

                    {/*HEADER -------------------- */}
                    <div className="weather-header">
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

                    {/*CONTENT ------------------ */}
                    <div className="weather-content">
                        <TabBarMenu/>

                        <div className="tab-wrapper">
                            Alle inhoud van de tabbladen komt hier!
                        </div>
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