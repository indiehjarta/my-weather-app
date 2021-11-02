import React from 'react';
import ForecastCard from './ForecastCard';

const ForecastWeather = ({ forecast }) => {

    return (
        <div className='forecast-wrapper'>
            <div>
                {forecast?.list?.map((day, i) => {
                    if (i < 5) {
                        return <ForecastCard data={day} key={i} />
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default ForecastWeather;
