import React from 'react';

import '../../Styles/CityCard/WeeklyForecast.scss';

const WeeklyForecast = () => {
  return (
    <ul className="weekly-forecast">
      <li className="weekly-forecast--day">
        <h3>{'MON'}</h3>
        <img alt="raining" />
        <h3>{'9 	\xB0'}</h3>
        <h4>{'RAINING'}</h4>
      </li>
      <li className="weekly-forecast--day">
        <h3>{'TUE'}</h3>
        <img alt="sunny" />
        <h3>{'15 	\xB0'}</h3>
        <h4>{'SUNNY'}</h4>
      </li>
      <li className="weekly-forecast--day">
        <h3>{'WED'}</h3>
        <img alt="cloudy" />
        <h3>{'11 	\xB0'}</h3>
        <h4>{'CLOUDY'}</h4>
      </li>
      <li className="weekly-forecast--day">
        <h3>{'THU'}</h3>
        <img alt="storm" />
        <h3>{'7 	\xB0'}</h3>
        <h4>{'STORM'}</h4>
      </li>
      <li className="weekly-forecast--day">
        <h3>{'FRI'}</h3>
        <img alt="sunny" />
        <h3>{'18 	\xB0'}</h3>
        <h4>{'SUNNY'}</h4>
      </li>
    </ul>
  );
};

export default WeeklyForecast;
