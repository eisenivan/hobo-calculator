import React, { useState } from 'react'
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

const App = () => {
  const [state, setState] = useState({      
    monthlyCannedBeanConsumption: 3,
    preferredClothesContainer: 'suitcase',
    fireOptimalHeatingLocation: 'furnace',
    fireOptimalCookingLocation: 'stove',
    toesVisibleThroughShoes: 'yes',
    likelihoodOfWindowsillPieTheft: 2,
    preferredTrainCarType: 'passenger',
    steelMillsOwned: 0,
    carsOwned: 0
  })
  
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Are you a depression era cartoon hobo?</h1>
        </header>

        <form className='input-form pure-form pure-form-stacked'>
          <label>What is your yearly income?</label>
          <div className='input-container'>
            <input type='text' name='income' value={state.income} onChange={handleChange} />
            { rule(state, hoboIncome) ? Bindle : null }
            { rule(state, tycoonIncome) ? Moustache : null }
          </div>

          <label>How many cars do you currently own?</label>
          <div className='input-container'>
            <input type='number' name='carsOwned' value={state.carsOwned} onChange={handleChange} />
            { rule(state, notMotorist) ? Bindle : null }
            { rule(state, motoristTycoon) ? Moustache : null }
          </div>

          <label>How many steel mills do you currently own?</label>
          <div className='input-container'>
            <input type='number' name='steelMillsOwned' value={state.steelMillsOwned} onChange={handleChange} />
            { rule(state, notSteelTycoon) ? Bindle : null }
            { rule(state, steelTycoon) ? Moustache : null }
          </div>

          <label>How many cans of beans would you say you eat per month?</label>
          <div className='input-container'>
            <input type='number' name='monthlyCannedBeanConsumption' value={state.monthlyCannedBeanConsumption} onChange={handleChange} />
            { rule(state, hoboBeanConsumption) ? Bindle : null }
          </div>

          <label>How would you prefer to pack your clothes for a trip?</label>
          <div className='input-container'>
            <select value={state.preferredClothesContainer} name='preferredClothesContainer' onChange={handleChange}>
              <option value='suitcase'>Suitcase</option>
              <option value='bindle'>Bindle</option>
            </select>
            { rule(state, hoboPackingStyle) ? Bindle : null }
          </div>

          <label>What is the ideal place for a heating fire?</label>
          <div className='input-container'>
            <select value={state.fireOptimalHeatingLocation} onChange={handleChange} name='fireOptimalHeatingLocation'>
              <option value='furnace'>Furnace</option>
              <option value='fireplace'>Fireplace</option>
              <option value='rusty-barrel'>Rusty barrel</option>
            </select>
            { rule(state, hoboHeatingFire) ? Bindle : null }
          </div>

          <label>Where would you rather light a cooking fire?</label>
          <div className='input-container'>
            <select value={state.fireOptimalCookingLocation} onChange={handleChange} name='fireOptimalCookingLocation'>
              <option value='stove'>Stove</option>
              <option value='grill'>Grill</option>
              <option value='rusty-barrel'>Rusty barrel</option>
            </select>
            { rule(state, hoboCookingFire) ? Bindle : null }
          </div>

          <label>With your shoes properly on, can you see your toes?</label>
          <div className='input-container'>
            <select value={state.toesVisibleThroughShoes} onChange={handleChange} name='toesVisibleThroughShoes'>
              <option value='yes'>Yes</option>
              <option value='false'>No</option>
            </select>
            { rule(state, hoboFootwear) ? Bindle : null }
          </div>

          <label>How likely are you to steal a pie that was left on a windowsill to cool?</label>
          <div className='input-container'>
            <select value={state.likelihoodOfWindowsillPieTheft} onChange={handleChange} name='likelihoodOfWindowsillPieTheft'>
              <option value='0'>I would never do that</option>
              <option value='1'>I probably wouldn't do that</option>
              <option value='2'>What kind of pie?</option>
              <option value='3'>Yeah I'd probably take that pie</option>
              <option value='4'>100% for sure stealing that pie</option>
            </select>
            { rule(state, hoboPieHabits) ? Bindle : null }
          </div>
        </form>
      </div>
    )
  }

export default App
