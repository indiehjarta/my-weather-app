import React from 'react';


const Card = ({ data }) => {

    const day = () => {
        let date = new Date(data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return days[day];
    }
    const { dt_txt, main: { temp } } = data;
    const { description } = data.weather[0]

    return (
        <div className='card'>
            <h4>{dt_txt}</h4>
            <h4> Temp: {temp}</h4>
            <h4> Desc: {description}</h4>
            <div>{day()}</div>
        </div>
    )
}

export default Card;