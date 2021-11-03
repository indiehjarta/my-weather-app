import React from 'react';
import ForecastCard from './ForecastCard';

const ForecastWeather = ({ forecast }) => {
    if (forecast.length >= 1) {
        return (
            <div className='forecast-wrapper'>
                {forecast.map((dataPoint, i) => {
                    return <ForecastCard data={dataPoint} key={i} />
                })}
            </div>
        );
    }
    else return null
}

export default ForecastWeather;
