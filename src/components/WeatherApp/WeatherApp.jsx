import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import temp_icon from "../assets/temp.png";
import clouds_icon from "../assets/clouds.png";
import rain_icon from "../assets/rain.png";
import partlyCloudy_icon from "../assets/partlyCloudy.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import heavyRain_icon from "../assets/heavyRain.png";
import sun_icon from "../assets/sun.png";


export const WeatherApp = () => {

    let api_key = "06e85cc5def3ef407d25fb9880bcb120";

    const [wicon,setWicon] = useState(clouds_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`; 

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" mph";
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °F";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(sun_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(clouds_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(partlyCloudy_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(partlyCloudy_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
        else{
            setWicon(sun_icon);
        }

    }


    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" width="200" />
            </div>
            <div className="weather-temp">23°c</div>
            <div className="weather-location">Endicott</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">60%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">15 mph</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp