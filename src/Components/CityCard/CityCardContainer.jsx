import React, { useState, useEffect } from 'react';
import WEATHER_API_KEY from '../../weather-key';

import CityCard from './CityCard';

import '../../Styles/CityCard/CityCardContainer.scss';

const CityCardContainer = ({ setTargetCity, targetCity }) => {
  const [forecast, setForecast] = useState({
    name: null,
    list: []
  });

  const weatherAPI = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?id=${targetCity}&cnt=6&units=imperial&appid=${WEATHER_API_KEY}`;

  useEffect(() => {
    fetch(weatherAPI)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') return;
        setForecast({
          name: data.city.name,
          list: data.list
        });
      });
  }, [targetCity, weatherAPI]);

  return (
    <div className="city-card-container">
      <div className="back-button-container">
        <button onClick={() => setTargetCity(null)}>&larr;</button>
      </div>
      {forecast.name === null ? null : <CityCard forecast={forecast} />}
    </div>
  );
};

export default CityCardContainer;
