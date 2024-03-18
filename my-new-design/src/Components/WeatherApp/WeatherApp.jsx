import React from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='' />
        <div className='search-icon'>
          <img src={search_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WeatherApp