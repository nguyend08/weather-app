import React from 'react';
import '../Styles/Displayed-Cities.scss'

function DisplayedCities(props) {
  return (
    <div className="displayed-cities">
      {props.cities.map(city => {
        let currentTemp = Math.trunc(((9/5) * city.main.temp) - 459.67);
        let low = Math.trunc(((9/5) * city.main.temp_min) - 459.67);
        let high = Math.trunc(((9/5) * city.main.temp_max) - 459.67);
        let weatherIcon = city.weather[0].icon
        let weatherDiscription = city.weather[0].description
      return (
        <ul className='displayed-cities-metrics'>
          <li>{city.name}</li>
          <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt='weather icon'></img>
          <li>{weatherDiscription}</li>
          <li>{currentTemp}<span>&#8457;</span></li>
          <li>{low}<span>&#8457;</span></li>
          <li>{high}<span>&#8457;</span></li>
        </ul>
      )})}
    </div>
  )
}

export default DisplayedCities;