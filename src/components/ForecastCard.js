import React from 'react';
import DayJS from 'react-dayjs';


function Card({ data }) {
    const { dt_txt, main: { temp, feels_like, humidity }, wind: { speed } } = data;
    const { description } = data.weather[0];
    const forDayJS = dt_txt.split(" ")[0];

    return (
        <div className={'card'}>
            <DayJS date={forDayJS} format={'dddd D MMMM'} />
            <h4> Temp: {temp}&#176;</h4>
            <h4> Feels like: {feels_like}</h4>
            <h4> Humidity: {humidity}</h4>
            <h4> Wind: {speed}</h4>
            <h4> Desc: {description}</h4>
        </div>
    )
}

export default Card;