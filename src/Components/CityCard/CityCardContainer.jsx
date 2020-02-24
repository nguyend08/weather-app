import React, { useState, useEffect } from 'react';
import WEATHER_API_KEY from '../../weather-key';

import CityCard from './CityCard';

import '../../Styles/CityCard/CityCardContainer.scss';

const CityCardContainer = ({ setTargetCity, targetCity }) => {
  const [forecast, setForecast] = useState(null);

  const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${targetCity}&units=imperial&appid=${WEATHER_API_KEY}`;

  useEffect(() => {
    fetch(weatherAPI)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') return;
        setForecast(data);
      });
  }, [targetCity, weatherAPI]);

  return (
    <div className="city-card-container">
      <div className="back-button-container">
        <button onClick={() => setTargetCity(null)}>&larr;</button>
      </div>
      <CityCard />
    </div>
  );
};

export default CityCardContainer;
