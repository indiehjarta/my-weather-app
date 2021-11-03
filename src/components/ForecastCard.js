import React from 'react';
import DayJS from 'react-dayjs';


export default function Card({ data }) {
    const { dt_txt, main: { temp, feels_like, humidity }, wind: { speed } } = data;
    const { description, icon } = data.weather[0];
    const forDayJS = dt_txt.split(" ")[0];
    const r = Math.round;

    return (
        <div className={'card'}>
            <DayJS date={forDayJS} format={'dddd D MMMM'} />
            <h4> Temp: {r(temp)}&#176;</h4>
            <h4> Feels like: {r(feels_like)}</h4>
            <h4> Humidity: {humidity}</h4>
            <h4> Wind: {r(speed)}</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h4>{description}</h4>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={description} />
            </div>
        </div>
    )
}