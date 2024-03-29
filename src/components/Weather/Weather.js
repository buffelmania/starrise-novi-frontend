import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from "../searchBar/SearchBar";
import './WeatherStyles.css'

// Importeer de functie round
const { round } = Math;

function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=7dec2cfd1eba0fc5544b314377fbac68&lang=nl`);
                console.log(response.data);
                setWeatherData(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    return (
        <>
            <SearchBar className="weather-search" setLocationHandler={setLocation} />

            <span className="location-details">
        {Object.keys(weatherData).length > 0 &&
            <>
                <h3>{weatherData.weather[0].description}</h3>
                <h3>{weatherData.name}</h3>


                <h3>{round(weatherData.main.temp - 273.15)}°C</h3>
            </>
        }
      </span>
        </>
    );
}

export default Weather;
