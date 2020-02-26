import React from 'react';

import '../../Styles/CityCard/DailyForecast.scss';

const DailyForecast = ({ city, forecast }) => {
  return (
    <div className="daily-forecast">
      <div className="daily-forecast--details">
        <h1 className="daily-forecast--details__temperature">
          {Math.round(forecast.main.temp)}
        </h1>
        <h3 className="status">{forecast.weather[0].main.toUpperCase()}</h3>
        <div className="daily-forecast--details--atmosphere">
          <div className="humidity">
            <p>HUMIDITY</p>
            <p>{`${forecast.main.humidity}%`}</p>
          </div>
          <div className="divider"></div>
          <div className="wind">
            <p>WIND</p>
            <p>{`${forecast.wind.speed} K/M`}</p>
          </div>
        </div>
      </div>
      <div className="city">
        <h2 className="city__name">{city}</h2>
        <div className="city__name-underline"></div>
      </div>
    </div>
  );
};

export default DailyForecast;
