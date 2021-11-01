import React from 'react';
import styles from './card.module.css';


function Card({ data }) {
    const { dt_txt, main: { temp, feels_like, humidity }, wind: { speed } } = data;
    const { description } = data.weather[0]

    return (
        <div className={styles.card}>
            <h4>{dt_txt}</h4>
            <h4> Temp: {temp}</h4>
            <h4> Feels like: {feels_like}</h4>
            <h4> Humidity: {humidity}</h4>
            <h4> Wind: {speed}</h4>
            <h4> Desc: {description}</h4>
        </div>
    )
}

export default Card;
