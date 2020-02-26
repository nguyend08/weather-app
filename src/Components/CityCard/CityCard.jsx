import React from 'react';

import DailyForecast from './DailyForecast';
import TwitterFeed from './TwitterFeed';
import IntervalForecast from './IntervalForecast';

import '../../Styles/CityCard/CityCard.scss';

const CityCard = ({ forecast }) => {
  return (
    <div className="city-card">
      <DailyForecast
        city={forecast.name.toUpperCase()}
        forecast={forecast.list[0]}
      />
      <div className="city-overview">
        <TwitterFeed city={forecast.name} />
        <div className="divider"></div>
        <IntervalForecast forecast={forecast.list.slice(1)} />
      </div>
    </div>
  );
};

export default CityCard;
