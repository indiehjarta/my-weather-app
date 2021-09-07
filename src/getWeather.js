import axios from 'axios';

const URLcurrent = 'https://api.openweathermap.org/data/2.5/weather';
const URLforecast = 'https://api.openweathermap.org/data/2.5/forecast';
// const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
// const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;
const API_KEY = '079e60bf630788fdcc1212311df00f12';

export const getWeather = async (query) => {
    const { data } = await axios.get(URLcurrent, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

export const getForecast = async (query) => {
    const { data1 } = await axios.get(URLforecast, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data1;
}

// import React, { useState } from 'react';
// import axios from 'axios';

// const Main = () => {
//     const [weather, setWeather] = useState();

//     const api_call = async e => {
//         e.preventDefault();
//         const API_KEY = '079e60bf630788fdcc1212311df00f12';
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=Alvesta&appid=${API_KEY}`;
//         const request = axios.get(url);
//         const response = await request;
//         setWeather(response.data.main);
//     }
//     weather && console.log(weather)

//     return (
//         <div className='main'>
//             <Header />
//             <Content>
//             </Content>
//         </div>
//     );
// }

// export default Main;

// data: function() {
//     return {
//       weather: null,
//       gotWeather: false,
//       city: "",
//     };
//   },
//   methods: {
//     getWeather() {
//       axios
//       .get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=75d52df782aadd749ed253cf966cb823`)
//       .then(response => {
//         this.weather = response.data;
//         this.gotWeather = true;
//         this.city = '';
//       })

// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';

// export const fetchWeather = createContext();

// export const fetchWeatherProvider = (props) => {
//     const [data, setData] = useState();
//     const apiKey = '079e60bf630788fdcc1212311df00f12';

//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${apiKey}`
//             )
//             .then((reponse) => setData(reponse.data))
//             .catch((error) => console.log(error));
//     }, [])

//     return (

//     )
// }