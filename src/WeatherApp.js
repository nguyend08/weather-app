import React, {Component} from 'react';
import './App.scss';
import Cities from './Components/Cities'

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="weatherApp">
        <Cities />
      </div>
    );
  }
  
}

export default WeatherApp;
