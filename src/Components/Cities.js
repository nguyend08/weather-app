import React, {Component} from 'react'
import '../Styles/Cities-Styles.scss'
import WEATHER_API_KEY from '../weather-key'

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
    fetch(`https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
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
  }

  render() {
    return (
      <div className='cities-container'>
        {
        this.state.transparent 
        ? 
        <div className='transparent-container'>
          <form 
            className='transparent-input'
            onSubmit={this.handleInputSubmit}
          >
            <label>
              Please Insert A City:
              <input 
                type='text' 
                value={this.state.currentCity}
                onChange={this.handleInputChange}
              />
            </label>
            <input type='submit' value='Submit'/>
          </form>
        </div>
        :
        <div 
          className='add-container'
          onClick={this.changeTransparent}
        >
          <h4 className='add-header'>ADD CITY</h4>
          <div className='add-button'></div>
          <img className='add-button-picture' alt='city buildings' src='http://www.freepngclipart.com/download/cartoon/78468-information-city-vinnytsia-cartoon-stryzhavka-download-hd-png.png'></img>
        </div>
        }
        
      </div>
    )
  }
}

export default Cities