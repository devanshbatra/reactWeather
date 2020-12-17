import React from 'react';
const Temperature =(props)=>{
    return(
            <div className="main-data">
                <img className='weather-icon' src={`http://openweathermap.org/img/wn/${props.iconcode}@2x.png`} alt="Weather icon" />
                <h1 className="condition center"> {props.weatherdesc} </h1>
                <h3 className="city-name">{props.cityName}, {props.country} </h3>
                <div className="temp-box">
                    <h1 className="temp"> {Math.floor((props.temperature)-273.15)} </h1>
                    <h1 className="deg">&deg;C</h1>
                </div>
                <h2>Feels like {Math.floor((props.feelsLike)-273.15)}&deg;C</h2>
                <h3>{Math.floor((props.tempMin)-273.15)}&deg;C/{Math.floor((props.tempMax)-273.15)}&deg;C</h3>
            </div>
    );
}

export default Temperature;