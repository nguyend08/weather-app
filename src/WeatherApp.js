import React, { Component } from "react";
import "./App.scss";
import Cities from "./Components/Cities";
import Login from "./Components/LoginPage";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }
  render() {
    const { login } = this.state;
    return <div className="weatherApp">{login ? <Login /> : <Cities />}</div>;
  }
}

export default WeatherApp;
