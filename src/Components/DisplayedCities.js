import React from 'react';
import '../Styles/Displayed-Cities.scss';

function DisplayedCities({ darkMode, displayedCities, setTargetCity }) {
  return displayedCities.length !== 0 ? (
    <div className="displayed-cities-container">
      {displayedCities.map(city => {
        let currentTemp = Math.trunc((9 / 5) * city.main.temp - 459.67);
        let low = Math.trunc((9 / 5) * city.main.temp_min - 459.67);
        let high = Math.trunc((9 / 5) * city.main.temp_max - 459.67);
        let weatherIcon = city.weather[0].icon;
        let weatherDiscription = city.weather[0].description;
        return (
          <div
            key={city.name}
            className={`displayed-cities-metrics ${
              darkMode ? 'displayed-cities-metric-dark' : ''
            }`}
            onClick={() => setTargetCity(city.name)}
          >
            <p className="cities-name">{city.name}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
              alt="weather icon"
              className="cities-image"
            ></img>
            <p className="cities-description">{weatherDiscription}</p>
            <p className="cities-current">
              {currentTemp}
              <span>&#8457;</span>
            </p>
            <div className="cities-low">
              <div className="arrow-down"></div>
              {low}
              <span>&#8457;</span>
              <div>Min</div>
            </div>
            <div className="cities-high">
              <div className="arrow-up"></div>
              {high}
              <span>&#8457;</span>
              <div>Max</div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="no-cities">
      <p className="no-cities-text">Add a City!</p>
    </div>
  );
}

export default DisplayedCities;
