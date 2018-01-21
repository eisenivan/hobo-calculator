import React, { Component } from 'react'
import regent from 'regent'
import './App.css'
import {
  hoboIncome,
  tycoonIncome,
  hoboBeanConsumption,
  hoboPackingStyle,
  hoboCookingFire,
  hoboHeatingFire,
  hoboFootwear,
  hoboPieHabits,
  notSteelTycoon,
  steelTycoon,
  notMotorist,
  motoristTycoon
} from './rules'
import Bindle from './Bindle'
import Moustache from './Moustache'

const { rule } = regent.init()

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      income: 50000,
      monthlyCannedBeanConsumption: 3,
      preferredClothesContainer: 'suitcase',
      fireOptimalHeatingLocation: 'furnace',
      fireOptimalCookingLocation: 'stove',
      toesVisibleThroughShoes: 'yes',
      likelihoodOfWindowsillPieTheft: 2,
      preferredTrainCarType: 'passenger',
      steelMillsOwned: 0,
      carsOwned: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Are you a depression era cartoon hobo?</h1>
        </header>

        <form className='input-form pure-form pure-form-stacked'>
          <label>What is your yearly income?</label>
          <div className='input-container'>
            <input type='text' name='income' value={this.state.income} onChange={this.handleChange} />
            { rule(this.state, hoboIncome) ? Bindle : null }
            { rule(this.state, tycoonIncome) ? Moustache : null }
          </div>

          <label>How many cars do you currently own?</label>
          <div className='input-container'>
            <input type='number' name='carsOwned' value={this.state.carsOwned} onChange={this.handleChange} />
            { rule(this.state, notMotorist) ? Bindle : null }
            { rule(this.state, motoristTycoon) ? Moustache : null }
          </div>

          <label>How many steel mills do you currently own?</label>
          <div className='input-container'>
            <input type='number' name='steelMillsOwned' value={this.state.steelMillsOwned} onChange={this.handleChange} />
            { rule(this.state, notSteelTycoon) ? Bindle : null }
            { rule(this.state, steelTycoon) ? Moustache : null }
          </div>

          <label>How many cans of beans would you say you eat per month?</label>
          <div className='input-container'>
            <input type='number' name='monthlyCannedBeanConsumption' value={this.state.monthlyCannedBeanConsumption} onChange={this.handleChange} />
            { rule(this.state, hoboBeanConsumption) ? Bindle : null }
          </div>

          <label>How would you prefer to pack your clothes for a trip?</label>
          <div className='input-container'>
            <select value={this.state.preferredClothesContainer} name='preferredClothesContainer' onChange={this.handleChange}>
              <option value='suitcase'>Suitcase</option>
              <option value='bindle'>Bindle</option>
            </select>
            { rule(this.state, hoboPackingStyle) ? Bindle : null }
          </div>

          <label>What is the ideal place for a heating fire?</label>
          <div className='input-container'>
            <select value={this.state.fireOptimalHeatingLocation} onChange={this.handleChange} name='fireOptimalHeatingLocation'>
              <option value='furnace'>Furnace</option>
              <option value='fireplace'>Fireplace</option>
              <option value='rusty-barrel'>Rusty barrel</option>
            </select>
            { rule(this.state, hoboHeatingFire) ? Bindle : null }
          </div>

          <label>Where would you rather light a cooking fire?</label>
          <div className='input-container'>
            <select value={this.state.fireOptimalCookingLocation} onChange={this.handleChange} name='fireOptimalCookingLocation'>
              <option value='stove'>Stove</option>
              <option value='grill'>Grill</option>
              <option value='rusty-barrel'>Rusty barrel</option>
            </select>
            { rule(this.state, hoboCookingFire) ? Bindle : null }
          </div>

          <label>With your shoes properly on, can you see your toes?</label>
          <div className='input-container'>
            <select value={this.state.toesVisibleThroughShoes} onChange={this.handleChange} name='toesVisibleThroughShoes'>
              <option value='yes'>Yes</option>
              <option value='false'>No</option>
            </select>
            { rule(this.state, hoboFootwear) ? Bindle : null }
          </div>

          <label>How likely are you to steal a pie that was left on a windowsill to cool?</label>
          <div className='input-container'>
            <select value={this.state.likelihoodOfWindowsillPieTheft} onChange={this.handleChange} name='likelihoodOfWindowsillPieTheft'>
              <option value='0'>I would never do that</option>
              <option value='1'>I probably wouldn't do that</option>
              <option value='2'>What kind of pie?</option>
              <option value='3'>Yeah I'd probably take that pie</option>
              <option value='4'>100% for sure stealing that pie</option>
            </select>
            { rule(this.state, hoboPieHabits) ? Bindle : null }
          </div>
        </form>
      </div>
    )
  }
}

export default App
