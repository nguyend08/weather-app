import React from 'react';

import '../../Styles/CityCard/TwitterFeed.scss';

const TwitterFeed = () => {
  return (
    <div className="twitter-feed">
      <h4>Twitter Feed</h4>
      <span>{'#Manteca'}</span>
      <ul className="tweets">
        <li>
          <p>{'"Don\'t Forget your sunscreen tomorrow!" - author'}</p>
        </li>
        <li>
          <p>{'"Amazing weather in Manteca!" - author'}</p>
        </li>
      </ul>
      <button className="twitter-feed__next">NEXT</button>
    </div>
  );
};

export default TwitterFeed;
