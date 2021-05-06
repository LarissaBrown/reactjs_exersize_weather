
import isCheckedTempReducer from "./isCheckedTemp";
import isLoadedReducer from "./isLoaded";
import fiveDayDataReducer from "./fiveDayData";
import eightTimesDataReducer from "./eightTimesData";
import weatherReducer from "./weather";
import _localItemsReducer from "./_localItems";
// import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  isCheckedTemp: isCheckedTempReducer,
  weather: weatherReducer,
  isLoaded: isLoadedReducer,
  fiveDayData: fiveDayDataReducer,
  eightTimesData: eightTimesDataReducer,
  _localItems: _localItemsReducer,

});
