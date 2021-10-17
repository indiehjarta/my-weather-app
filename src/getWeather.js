import axios from 'axios';

const URLcurrent = 'https://api.openweathermap.org/data/2.5/weather';
const URLforecast = 'https://api.openweathermap.org/data/2.5/forecast';
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
            lat: '',
            lon: '',
            APPID: API_KEY,
        }
    });
    return data1;
}