import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../redux/reducers'




const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancer)

console.log('Initial state: ', store.getState())









// // Log the initial state
// console.log('Initial state: ', store.getState())
// const persistedWeatherString = localStorage.getItem('weather')

// if (persistedWeatherString) {
//   preloadedState = {
//     weather: JSON.parse(persistedWeatherString)
//   }
// }

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )

// store.dispatch({ type: 'weather/loadWeather', payload: 'weather'})
// store.dispatch({ type: 'weather/fetchFiveDayData', payload: 'fiveDayData '})
// store.dispatch({ type: 'weather/fetchOneDayWeatherData', payload: 'oneDayWeatherData' })

// store.dispatch({ type: 'weather/isLoaded', payload: true })
// store.dispatch({ type: 'weather/isCheckedTemp', payload: false })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })


// unsubscribe()







    




