import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

//STORE -> GLOBALIZED STATE
//let store = createStore(reducer)

//ACTION-> NAME DESCRIBING THE ACTION
//simple function that returns an object
//expl:
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

//REDUCER -> DESCRIBES HOW ACTIONS TRANSFORM STATE INTO NEW STATE
//expl: 
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    default:
      break
  }
  
}
let store = createStore(counter)

//Display it in the console
store.subscribe(()=> console.log(store.getState()))


//DISPATCH -> TO EXECUTE ACTION
store.dispatch(increment())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
