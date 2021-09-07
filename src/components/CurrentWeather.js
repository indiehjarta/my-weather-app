import React from 'react';
import DayJS from 'react-dayjs';


const CurrentWeather = ({ weather }) => {
    return (
            <div className='current-main'>
                <div className='main-title'>
                    <h2>{weather.name} | {weather.sys.country}</h2>
                    <DayJS date={''} format={'dddd D MMMM'} />
                </div>
                <div className='desc-wrapper'>
                    <div className='desc'>
                        <p id='temp'>{Math.round(weather.main.temp)}&#176;</p>
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
                </div>
            <table className='info'>
                <thead>
                    <tr>
                        <th>Feels like</th>
                        <th>Humidity</th>
                        <th>Wind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Math.round(weather.main.feels_like)}&#176;</td>
                        <td>{weather.main.humidity} &#x25;</td>
                        <td>{Math.round(weather.wind.speed)} m/s</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrentWeather;
