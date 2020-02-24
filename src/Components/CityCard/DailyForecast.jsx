import React from 'react';

import '../../Styles/CityCard/DailyForecast.scss';

const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <div className="daily-forecast--details">
        <h1 className="daily-forecast--details__temperature">12</h1>
        <h3 className="status">{'CLOUDY'}</h3>
        <div className="daily-forecast--details--atmosphere">
          <div className="humidity">
            <p>HUMIDITY</p>
            <p>{'64%'}</p>
          </div>
          <div className="divider"></div>
          <div className="wind">
            <p>WIND</p>
            <p>{'12 K/M'}</p>
          </div>
        </div>
      </div>
      <div className="city">
        <h2 className="city__name">{'MANTECA'}</h2>
        <div className="city__name-underline"></div>
      </div>
    </div>
  );
};

export default DailyForecast;
