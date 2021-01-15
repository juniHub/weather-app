import React, { useState } from 'react';
import Advise from './Advise';

const api = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [value,setValue] = useState('Celsius');

  const handleChange = (event) => {

    setValue(event.target.value);
    setWeather({});
  
  }


  const searchC = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const searchF = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? (weather.main.temp > 16 && value==="Celsius") ||  (weather.main.temp > 60 && value==="Fahrenheit")
            ? 'app warm'
            : 'app cold'
          : 'app'
      }
    >
      <main>

  <div className="select-box">
   <label className="prompt">
    Select Celsius or Fahrenheit:
    <select className="select" value={value} onChange={handleChange}>
      <option value="Celsius">Celsius</option>
      <option value="Fahrenheit">Fahrenheit</option>
    </select>
    </label>
    </div>
 
      <div className="search-box">
        
          <input
            type="text"
            className="search-bar"
            placeholder="Enter the city name"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={value==="Celsius"?searchC:searchF}
          />

          </div>

      

        {typeof weather.main !== 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{  new Date().toLocaleString()}</div>
             
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)} {value==="Celsius"? '°C':'℉'}</div>
              <div className="weather">{weather.weather[0].description}</div>
              <div className="icon">
                <img alt="weather-icon"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
              </div>
            </div>

              
      <Advise/>



          </div>
        ) : (
          <div className="prompt">
            Enter the city name to know the current weather and get tip of the day!
          </div>
        )}


      </main>
    

    </div>
  );
}

export default App;
