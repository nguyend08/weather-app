import React, {Component} from 'react'
import '../Styles/Cities-Styles.scss'

class Cities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  addCity(city) {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}`)
      .then(results => results.json())
      .then(data => {
        this.setState(prevState =>({
          cities: [...prevState.cities, data]
        }))
      })
      .catch(error => console.error('Error:', error))
  } 

  render() {
    return(
      <div className='cities-container'>
        <div className='add-container'>
          <h4 className='add-header'>ADD CITY</h4>
          <div className='add-button'></div>
          <img className='add-button-picture' src='http://www.freepngclipart.com/download/cartoon/78468-information-city-vinnytsia-cartoon-stryzhavka-download-hd-png.png'></img>
        </div>
      </div>
    )
  }
}

export default Cities