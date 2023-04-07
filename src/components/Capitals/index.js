import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({
      capitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {capitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="app-container">
        <div className="country-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="options-container ">
            <select
              value={capitalId}
              onChange={this.onChangeCapital}
              className="selector"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option-text"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="description"> is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
