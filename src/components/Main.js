import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Main;





// const App = () => {
//   const [query, setQuery] = useState('');
//     const [weather, setWeather] = useState({});
    
//     const search = async (e) => {
//         if(e.key === 'Enter') {
//           const data = await getWeather(query);

//           setWeather(data);
//           setQuery('');
//         }
//     }

//   return (
//     <div className='container'>
//       <div className='sun'></div>

//       <div className='header-wrapper'>
//         <h1>What's up, weather?</h1>
//         <input
//           className='search'
//           type='text'
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyPress={search}
//           placeholder='Search city...' />
//       </div>

//       <div className='current-wrapper'>
//           {weather.main && (
//             <div className='main'>
//               <div className='main-title'>
//                 <h2>{weather.name} | {weather.sys.country}</h2>
//                 <DayJS date={""} format={"dddd D MMMM"} />
//               </div>
//               <div className='desc-wrapper'>
//                 <div className='desc'>
//                   <p id='temp'>
//                     {Math.round(weather.main.temp)}&#176;
//                   </p>
//                   <p>{weather.weather[0].description}</p>
//                 </div>
//                 <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
//             </div>
//             <table className='info'>
//               <tr>
//                 <th>Feels like</th>
//                 <th>Humidity</th>
//                 <th>Wind</th>
//               </tr>
//               <tr>
//                 <td>{Math.round(weather.main.feels_like)}&#176;</td>
//                 <td>{ weather.main.humidity } &#x25;</td>
//                 <td>{Math.round(weather.wind.speed)} m/s</td>
//               </tr>
//             </table>
//             </div>
//           )}
//       </div>
//       <div className='forecast-wrapper'>
//         <div className='forecast'>
//           <p>Prognos här</p>
//         </div>
//       </div>
//     </div> 
//   );
// }

// export default App;
