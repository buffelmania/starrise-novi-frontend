import React, {useState, useEffect} from "react";
import axios from 'axios';
import './ZonEnMaanStyles.css'
import SearchBar from "../../components/searchBar/SearchBar";
import SunMoon from "../../assets/Zon en Maan.jpg";
import Weather from "../../components/Weather/Weather";

function ZonEnMaan() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=d793088378b847f6b524c3091aa6ecfd&location=${location}`);
                console.log(response.data);
                setData(response.data);
                setError(null); // clear any previous errors
            } catch (e) {
                console.error(e);
                setError("Onjuiste locatie"); // set error message
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    return (
        <section className='zonEnMaan'>
            <div className="overlay">
                <img className="img" src={SunMoon} alt=""/>
                <div className="content">
                    <main>
                    <div className="grid-container">
                        <div className="grid-item item11">
                            <SearchBar setLocationHandler={setLocation}/>
                            {error && <p>{error}</p>}
                            {Object.keys(data).length > 0 && (
                                <span className="location-details">
                  <h3>{data.name}</h3>
                  <h2>Zonsopkomst: {data.sunrise}</h2>
                  <h2>Zonsondergang: {data.sunset}</h2>
                  <h2>Afstand tot de zon: {data.sun_distance} km</h2>
                </span>
                            )}
                        </div>
                        <div className="grid-item item21">
                            {error && <p>{error}</p>}
                            {Object.keys(data).length > 0 && (
                                <span className="location-details">
                  <h3>{data.name}</h3>
                  <h2>Maansopkomst: {data.moonrise}</h2>
                  <h2>Maansondergang: {data.moonset}</h2>
                  <h2>Afstand tot de maan: {data.moon_distance} km</h2>
                </span>
                            )}
                        </div>

                        <div className="grid-item item31">
                            <h5>Kijk hier hoe het weer bij jou is.</h5><p></p>
                            <Weather/>
                            <h6>Valt het weer tegen? of wil je wat anders? Kijk dan eens bij een van onderstaande activiteiten</h6>

                            <ul className="link-list">
                                <li><a href="/Quiz">Doe een Quiz</a></li>
                                <li><a href="/ISSTracker">Volg de live locatie van het ISS</a></li>
                                <li><a href="/ToDo">Verveel je je? Kijk hier wat je nog meer kan doen</a></li>
                            </ul>

                        </div>
                    </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default ZonEnMaan;
