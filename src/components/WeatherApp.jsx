import React from "react";
import './WeatherApp.css';
import { useEffect, useState } from "react";

import search_icon from './assets/search.png';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import wind_icon from './assets/wind.png';
import humidity_icon from './assets/humidity.png';


const API_KEY = '284caa3b1b58571adbab78df74ab7e7e';

function WeatherApp() {
    const [dataRecieved, setDataRecieved] = useState([]);
    const [searchTerm, setSearchTerm] = useState('ottawa');
    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=Metric&appid=${API_KEY}`;

    const searchWeather = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        if(data.cod === "404"){
            alert(`The City ${searchTerm} is not a city registered on the open weather database, Please try a different city`);
        }
          setDataRecieved(data);

          switch(dataRecieved?.weather?.[0]?.icon){
            case "01d":
            case "01n":
                setWeatherIcon(clear_icon);
                break;
            case "09d":
            case "09n":
                setWeatherIcon(drizzle_icon);
                break;
            case "10d":
            case "10n":
                setWeatherIcon(rain_icon);
                break;
            case "13d":
            case "13n":
                setWeatherIcon(snow_icon);
                break;

            default :
            setWeatherIcon(cloud_icon);
          }



    }

    useEffect(() => {
        searchWeather();
    }, []);




    return (
        

        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="City" onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="search-icon" onClick={() => searchWeather()}>
                    <img src={search_icon} alt="the search icon" />
                </div>
            </div>

            
            

            


            <div className="weather-image">
                <img src={weatherIcon} alt='a weather icon' />
            </div>
            <div className="weather-temp">{Math.floor(dataRecieved?.main?.temp)}°C</div>
            <div className="weather-location">{dataRecieved?.name}</div>
            <div className="weather-location-feels">Feels Like {Math.floor(dataRecieved?.main?.feels_like)}°C </div>
            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{dataRecieved?.main?.humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{dataRecieved?.wind?.speed} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default WeatherApp;

