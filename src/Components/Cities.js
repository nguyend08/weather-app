import React, { Component } from "react";
import WEATHER_API_KEY from "../weather-key";
import SelectCity from "./SelectCity";
import AddCity from "./AddCity";
import DisplayedCities from "./DisplayedCities";
import NavBar from "./NavBar";
import "../Styles/Cities-Styles.scss";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      displayedCities: [],
      transparent: false,
      darkMode: false,
      currentCity: "",
      left: 0,
      middle: 1,
      right: 2
    };
    this.addCity = this.addCity.bind(this);
    this.changeTransparent = this.changeTransparent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }

  addCity(city) {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
    )
      .then(results => results.json())
      .then(data => {
        if (data.cod === "404") return;
        if (this.state.displayedCities.length <= 2) {
          this.setState(prevState => ({
            cities: [...prevState.cities, data],
            displayedCities: [...prevState.displayedCities, data]
          }));
        } else {
          this.setState(prevState => ({
            cities: [...prevState.cities, data]
          }));
        }
      })
      .catch(error => console.error("Error:", error));
  }

  changeTransparent() {
    this.setState({
      transparent: !this.state.transparent
    });
  }

  rightArrow() {
    this.setState(
      {
        left: this.state.left + 1,
        middle: this.state.middle + 1,
        right: this.state.right + 1
      },
      this.changeDisplay
    );
  }

  leftArrow() {
    this.setState(
      {
        left: this.state.left - 1,
        middle: this.state.middle - 1,
        right: this.state.right - 1
      },
      this.changeDisplay
    );
  }

  changeDisplay() {
    const { left, middle, right, cities } = this.state;
    let newArr = [cities[left], cities[middle], cities[right]];
    this.setState({
      displayedCities: newArr
    });
  }

  changeMode() {
    this.setState({
      darkMode: !this.state.darkMode
    });
  }

  handleInputChange(e) {
    this.setState({
      currentCity: e.target.value
    });
  }

  handleInputSubmit(e) {
    e.preventDefault();
    this.addCity(this.state.currentCity);
    this.setState({
      currentCity: ""
    });
    this.changeTransparent();
  }

  render() {
    const {
      transparent,
      currentCity,
      displayedCities,
      darkMode,
      left,
      right,
      cities
    } = this.state;
    return (
      <div
        className={`cities-container ${
          darkMode ? "cities-container-dark" : ""
        }`}
      >
        <NavBar changeMode={this.changeMode} darkMode={darkMode} />
        {transparent ? (
          <SelectCity
            handleInputSubmit={this.handleInputSubmit}
            handleInputChange={this.handleInputChange}
            currentCity={currentCity}
            changeTransparent={this.changeTransparent}
            darkMode={darkMode}
          />
        ) : (
          <React.Fragment>
            <AddCity
              changeTransparent={this.changeTransparent}
              darkMode={darkMode}
            />
            <div className="display-container">
              <LeftArrow
                darkMode={darkMode}
                leftArrow={this.leftArrow}
                left={left}
              />
              <DisplayedCities
                displayedCities={displayedCities}
                darkMode={darkMode}
              />
              <RightArrow
                darkMode={darkMode}
                rightArrow={this.rightArrow}
                right={right}
                cities={cities}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Cities;
