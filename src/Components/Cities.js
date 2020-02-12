import React, {Component} from 'react'
import WEATHER_API_KEY from '../weather-key'
import SelectCity from './SelectCity'
import AddCity from './AddCity'
import DisplayedCities from './DisplayedCities'
import NavBar from './NavBar'
import '../Styles/Cities-Styles.scss'

class Cities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      displayedCities: [],
      transparent: false,
      darkMode: false,
      currentCity: '',
    }
    this.addCity = this.addCity.bind(this);
    this.changeTransparent = this.changeTransparent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  addCity(city) {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
    
      .then(results => results.json())
      .then(data => {
        console.log(data)
        if (data.cod === "404") return
        this.setState(prevState =>({
          cities: [...prevState.cities, data]
        }))
      })
      .catch(error => console.error('Error:', error))
  } 

  changeTransparent() {
    this.setState({
      transparent: !this.state.transparent
    })
  }

  changeMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  handleInputChange(e) {
    this.setState({
      currentCity: e.target.value
    })
  }

  handleInputSubmit(e) {
    e.preventDefault();
    this.addCity(this.state.currentCity)
    this.setState({
      currentCity:''
    })
    this.changeTransparent()
  }

  render() {
    const {transparent, currentCity, cities, darkMode} = this.state;
    return (
      <div className={`cities-container ${darkMode ? "cities-container-dark" : ""}`}>
        <NavBar 
          changeMode={this.changeMode}
          darkMode={darkMode}
        />
        {
        transparent 
        ? 
        <SelectCity 
          handleInputSubmit={this.handleInputSubmit}
          handleInputChange={this.handleInputChange}
          currentCity={currentCity}
          changeTransparent={this.changeTransparent}
          darkMode={darkMode}
        />
        :
        <React.Fragment>
            <AddCity 
              changeTransparent={this.changeTransparent}
              darkMode={darkMode}
            />
            <DisplayedCities 
              cities={cities}
              darkMode={darkMode}
            />
        </React.Fragment>
        }
      </div>
    )
  }
}

export default Cities