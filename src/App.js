import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import { getForecast, getWeather } from './getWeather';

const App = () => {
  const [query, setQuery] = useState('växjö');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  /*  
    Inte nödvändigt att omvandla till integer om man bara ska sortera efter klockslag men lämnar utrymme för grundligare filtrering.
    Går att förkorta betydligt men lämnar det lätt att följa
  */
  const reduceDataPoints = (date) => {
    let currentTime = date.dt_txt;
    let onlyTime = currentTime.split(" ")[1]; //returns current time as string with hifens
    let cleanString = onlyTime.split(":").join(""); //remove hifens and combine string
    let timeAsNumber = parseInt(cleanString); //returns the time as an integer
    return timeAsNumber;
  }


  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await getWeather(query);
      const data1 = await getForecast(query);
      setWeather(data);
      reduceDataPoints(data1.list[0]);

      // filtrerar datapoints till en om dagen (kl: 12:00)
      const weatherAt12PmEveryDay = data1.list.filter(term => reduceDataPoints(term) === 120000)

      data1 && setForecast(weatherAt12PmEveryDay)
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