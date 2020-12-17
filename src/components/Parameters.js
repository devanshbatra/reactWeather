import React from 'react';

const Parameters = (props) => {


    return (
        <div className="para-box">
            <div className="humidity">
                <div className="label">
                    <i className="fas fa-burn para-icon"></i>
                    <p>Humidity</p>
                </div>
                <h2> {props.humidity} %</h2>
            </div>
            <div className="pressure">
                <div className="label">
                    <i className="fab fa-pied-piper-hat para-icon"></i>
                    <p>Air Pressure</p>
                </div>
                <h2>{props.pressure} PS</h2>
            </div>
            <div className="rain">
                <div className="label">
                    <i className="fas fa-cloud para-icon"></i>
                    <p>Cloud Cover</p>
                </div>
                <h2>{props.cloudCover} %</h2>
            </div>
            <div className="wind">
                <div className="label">
                    <i className="fas fa-wind para-icon"></i>
                    <p>Wind Speed</p>
                </div>
                <h2>{((props.windSpeed)*3.6).toFixed(1)} km/h</h2>
            </div>
        </div>
    );
}

export default Parameters;