import React, {Component} from 'react'
import '../Styles/Cities-Styles.scss'
import WEATHER_API_KEY from '../weather-key'
import SelectCity from './SelectCity'
import AddCity from './AddCity'

class Cities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      transparent: false,
      currentCity: '',
    }
    this.addCity = this.addCity.bind(this);
    this.changeTransparent = this.changeTransparent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  addCity(city) {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
    
      .then(results => results.json())
      .then(data => {
        console.log(data)
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

  handleInputChange(e) {
    this.setState({
      currentCity: e.target.value
    })
  }

  handleInputSubmit(e) {
    e.preventDefault();
    this.addCity(this.state.currentCity)
    this.changeTransparent()
  }

  render() {
    return (
      <div className='cities-container'>
        {
        this.state.transparent 
        ? 
        <SelectCity 
          handleInputSubmit={this.handleInputSubmit}
          handleInputChange={this.handleInputChange}
          currentCity={this.state.currentCity}
          changeTransparent={this.changeTransparent}
        />
        :
        <AddCity 
          changeTransparent={this.changeTransparent}
        />
        }
        
      </div>
    )
  }
}

export default Cities