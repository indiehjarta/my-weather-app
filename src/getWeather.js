import axios from 'axios';

const URLcurrent = 'https://api.openweathermap.org/data/2.5/weather';
const URLforecast = 'https://api.openweathermap.org/data/2.5/onecall';
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
    //todo bara hårdkodade coordinater växjö än så länge 
    try {
        const { data } = await axios.get(URLforecast, {
            params: {
                q: query,
                units: 'metric',
                lat: '56.8790',
                lon: '14.8059',
                appid: API_KEY,
                exclude: 'current,minutely,hourly'
            }
        });
        return data;
    }
    catch (err) {
        console.log(err);
    }
}