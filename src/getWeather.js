import axios from 'axios';

const URLcurrent = 'https://api.openweathermap.org/data/2.5/weather';
const URLforecast = 'https://pro.openweathermap.org/data/2.5/forecast/hourly';
const API_KEY = '079e60bf630788fdcc1212311df00f12';

export const getWeather = async (query) => {
    try {
        const { data } = await axios.get(URLcurrent, {
            params: {
                q: query,
                units: 'metric',
                appid: API_KEY,
            }
        });
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getForecast = async (query) => {
    try {
        const { data1 } = await axios.get(URLforecast, {
            params: {
                q: query,
                units: 'metric',
                /*  lat: '',
                lon: '', */
                appid: API_KEY,
            }
        });
        return data1;
    }
    catch (err) {
        console.log(err);
    }
}