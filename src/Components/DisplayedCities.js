import React from 'react';
import '../Styles/Displayed-Cities.scss'

function DisplayedCities(props) {
  return (
    <div className="displayed-cities">
      {props.cities.map(city => {
        let currentTemp = Math.trunc(((9/5) * city.main.temp) - 459.67);
        let low = Math.trunc(((9/5) * city.main.temp_min) - 459.67);
        let high = Math.trunc(((9/5) * city.main.temp_max) - 459.67);
      return (
        <ul className='displayed-cities-metrics'>
          <li>{city.name}</li>
          <li>{currentTemp}<span>&#8457;</span></li>
          <li>{low}<span>&#8457;</span></li>
          <li>{high}<span>&#8457;</span></li>
        </ul>
      )})}
    </div>
  )
}

export default DisplayedCities;