import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import { getForecast, getWeather } from './getWeather';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await getWeather(query);
      const data1 = await getForecast(query);

      setWeather(data);
      setForecast(data1);
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
          placeholder='Search city...' />
      </div>

      <div className='info-wrapper'>
        {weather.main && (
          <div>
            <CurrentWeather weather={weather} />
            <ForecastWeather forecast={forecast}/>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;