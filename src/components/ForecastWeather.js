import React from 'react';
import Card from './Card';

const ForecastWeather = ({ forecast }) => {
    if (forecast.length >= 1) {
        return (
            <div className='forecast-wrapper'>
                <div>
                    {forecast.map((dataPoint, index) => {
                        return <Card data={dataPoint} key={index} />
                    })}
                </div>
            </div>
        );
    }
    else return <></>
}

export default ForecastWeather;
