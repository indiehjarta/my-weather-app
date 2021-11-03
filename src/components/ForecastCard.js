import React from 'react';
import DayJS from 'react-dayjs';


export default function Card({ data }) {
    const { dt_txt, main: { temp, feels_like } } = data;
    const { description } = data.weather[0];
    const forDayJS = dt_txt.split(" ")[0];
    const r = Math.round;

    return (
        <div className='card'>
            <div className="card-content">
                <h5><DayJS date={forDayJS} format={'dddd D MMMM'}/></h5>
                <h4 className='forecast-temp'>{r(temp)}&#176;</h4>
                <h4 className='forecast-desc'>{description}</h4>
                <h4 className='forecast-feels-like'>Feels like: {r(feels_like)}&#176;</h4>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt={data.weather[0].description} />
            </div>
        </div>
    )
}