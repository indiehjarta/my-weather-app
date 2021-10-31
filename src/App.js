import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import { getForecast, getWeather } from './getWeather';

const App = () => {
  const [query, setQuery] = useState('växjö');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const search = async (e) => {

    if (e.key === 'Enter') {
      const data = await getWeather(query);
      const data1 = await getForecast(query);


      data1.list.forEach(forecast => {
        // console.log(forecast)
        const { dt_txt, main: { temp, feels_like, humidity }, wind: { speed } } = forecast;
        const { description } = forecast.weather[0]
        console.log(dt_txt, temp, feels_like, humidity, speed, description);
      });

      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className='container'>
      <div className='sun'></div>

      <div className='header-wrapper'>
        <h1>What's up, weather?</h1>
        <input className='search'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          placeholder='Search city...'
          autoFocus
        />
      </div>

      <div className='info-wrapper'>
        {weather?.main && (
          <div>
            <CurrentWeather weather={weather} />
            <ForecastWeather forecast={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;