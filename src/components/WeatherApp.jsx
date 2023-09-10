import React from "react";
import './WeatherApp.css';

import search_icon from './assets/search.png';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import wind_icon from './assets/wind.png';
import humidity_icon from './assets/humidity.png';

function WeatherApp () {
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput"placeholder="City"/>
                <div className="search-icon">
                    <img src={search_icon} alt="the search icon"/>
                </div>
            </div>

            <div className="weather-image">
                <img src={cloud_icon} alt= 'a cloud icon' />
            </div>
            <div className="weather-temp">24C</div>
            <div className="weather-location">Ottawa</div>
            <div className="data-container">

            <img src="" alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64%</div>
            </div>

            </div>

        </div>

    );
}

export default WeatherApp;

