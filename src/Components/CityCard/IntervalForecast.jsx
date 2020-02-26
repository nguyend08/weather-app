import React from 'react';

import '../../Styles/CityCard/IntervalForecast.scss';

const IntervalForecast = ({ forecast }) => {
  return (
    <ul className="weekly-forecast">
      {forecast.map((interval, index) => (
        <li key={interval.dt} className="weekly-forecast--day">
          <h3>{`+${3 * (index + 1)}h`}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${interval.weather[0].icon}.png`}
            alt={interval.weather[0].description}
          />
          <h3>{`${Math.round(interval.main.temp)} 	\xB0`}</h3>
          <h4>{interval.weather[0].main}</h4>
        </li>
      ))}
    </ul>
  );
};

export default IntervalForecast;
