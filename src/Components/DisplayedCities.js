import React from "react";
import "../Styles/Displayed-Cities.scss";

function DisplayedCities(props) {
  return (
    <React.Fragment>
      {props.cities.length !== 0 ? (
        <div className="displayed-cities-container">
          {props.cities.map(city => {
            let currentTemp = Math.trunc((9 / 5) * city.main.temp - 459.67);
            let low = Math.trunc((9 / 5) * city.main.temp_min - 459.67);
            let high = Math.trunc((9 / 5) * city.main.temp_max - 459.67);
            let weatherIcon = city.weather[0].icon;
            let weatherDiscription = city.weather[0].description;
            return (
              <div className="displayed-cities-metrics">
                <p className="cities-name">
                  {city.name}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
                  alt="weather icon"
                  className="cities-image"
                ></img>
                <p className="cities-description">
                  {weatherDiscription}
                </p>
                <p className="cities-current">
                  {currentTemp}
                  <span>&#8457;</span>
                </p>
                <p className="cities-low">
                  <div className="arrow-down"></div>
                  {low}
                  <span>&#8457;</span>
                  <div>Min</div>
                </p>
                <p className="cities-high">
                  <div className="arrow-up"></div>
                  {high}
                  <span>&#8457;</span>
                  <div>Max</div>
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-cities">
          <p className="no-cities-text">Add a City!</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default DisplayedCities;
