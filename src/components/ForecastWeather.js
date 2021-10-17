import React from 'react';


const ForecastWeather = ({ forecast }) => {
    return (
        <div className='forecast-wrapper'>
            <div>
                {forecast.map((day) => {
                        <div>{day.description}</div>
                })}
            </div>
        </div>
    );
}

export default ForecastWeather;
