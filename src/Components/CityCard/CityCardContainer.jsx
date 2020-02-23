import React from 'react';

const CityCardContainer = ({ setTargetCity }) => {
  return (
    <div className="city-card-container">
      <div className="back-button-container">
        <button onClick={() => setTargetCity(null)}>Back</button>
      </div>
      <div className="city-card">
        <div className="daily-forecast">
          <div className="daily-forecast--details">
            <h1>12 &#176;</h1>
            <h3 className="status">CLOUDY</h3>
            <div>
              <div className="humidity">
                <h4>HUMIDITY</h4>
                <p>64%</p>
              </div>
              <div className="wind">
                <h4>WIND</h4>
                <p>12 K/M</p>
              </div>
            </div>
          </div>
          <h1 className="daily-forecast__city-name">FRANCE</h1>
        </div>
        <div className="flex-container">
          <div className="twitter-feed">
            <h3>Twitter Feed</h3>
            <span>#France</span>
            <ul>
              <li>
                <img alt="twitter-user" />
                <span>Don't Forget your sunscreen tomorrow!</span>
              </li>
              <li>
                <img alt="twitter-user" />
                <span>Amazing weather in Paris!</span>
              </li>
            </ul>
            <button>NEXT</button>
          </div>
          <ul className="weekly-forecast">
            <li>
              <h3>MON</h3>
              <img alt="raining" />
              <h3>9 &#176;</h3>
              <h4>RAINING</h4>
            </li>
            <li>
              <h3>TUE</h3>
              <img alt="sunny" />
              <h3>15 &#176;</h3>
              <h4>SUNNY</h4>
            </li>
            <li>
              <h3>WED</h3>
              <img alt="cloudy" />
              <h3>11 &#176;</h3>
              <h4>CLOUDY</h4>
            </li>
            <li>
              <h3>THU</h3>
              <img alt="storm" />
              <h3>7 &#176;</h3>
              <h4>STORM</h4>
            </li>
            <li>
              <h3>FRI</h3>
              <img alt="sunny" />
              <h3>18 &#176;</h3>
              <h4>SUNNY</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityCardContainer;
