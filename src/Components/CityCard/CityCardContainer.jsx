import React from 'react';

import CityCard from './CityCard';

import '../../Styles/CityCard/CityCardContainer.scss';

const CityCardContainer = ({ setTargetCity }) => {
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
