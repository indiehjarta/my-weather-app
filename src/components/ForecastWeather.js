import React from 'react';
import Card from './Card';

const ForecastWeather = ({ forecast }) => {

    return (
        <div className='forecast-wrapper'>
            <div>
                {forecast?.list?.map((dataPoint, index) => {
                    return <Card data={dataPoint} key={index} />
                })}
            </div>
        </div>
    );
}

export default ForecastWeather;
