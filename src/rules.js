import regent from 'regent'

const { or, not } = regent.init()

export const hoboIncome = { key: 'income', fn: '!greaterThan', params: [10000] }
export const tycoonIncome = { key: 'income', fn: 'greaterThan', params: [1000000] }
export const hoboBeanConsumption = { key: 'monthlyCannedBeanConsumption', fn: 'greaterThan', params: [2] }
export const hoboPackingStyle = { key: 'preferredClothesContainer', fn: 'equals', params: ['bindle'] }

export const hoboCookingFire = { key: 'fireOptimalCookingLocation', fn: 'equals', params: ['rusty-barrel'] }
export const hoboHeatingFire = { key: 'fireOptimalHeatingLocation', fn: 'equals', params: ['rusty-barrel'] }
export const hoboFireHabits = or([hoboCookingFire, hoboHeatingFire])

export const hoboFootwear = { key: 'toesVisibleThroughShoes', fn: 'equals', params: ['yes'] }
export const hoboPieHabits = { key: 'likelihoodOfWindowsillPieTheft', fn: 'greaterThan', params: [2] }

export const steelTycoon = { key: 'steelMillsOwned', fn: 'greaterThan', params: [0] }
export const notSteelTycoon = not(steelTycoon)
export const motorist = { key: 'carsOwned', fn: 'greaterThan', params: [0] }
export const notMotorist = not(motorist)
export const motoristTycoon = { key: 'carsOwned', fn: 'greaterThan', params: [3] }
export const hoboDisqualifyingTraits = or([steelTycoon, motorist])
