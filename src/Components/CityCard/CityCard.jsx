import React from 'react';

import DailyForecast from './DailyForecast';
import TwitterFeed from './TwitterFeed';
import WeeklyForecast from './WeeklyForecast';

import '../../Styles/CityCard/CityCard.scss';

const CityCard = () => {
  return (
    <div className="city-card">
      <DailyForecast />
      <div className="city-overview">
        <TwitterFeed />
        <div className="divider"></div>
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default CityCard;
