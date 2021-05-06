// import { VISIBILITY_FILTERS } from "../../constants";

// export const getLoadWeatherState = store => store.LoadWeather;

// export const getLoadWeatherList = store =>
//   getLoadWeatherState(store) ? getLoadWeatherState(store).allKeys : [];

// export const getItemByKey = (store, key) =>
//   getLoadWeatherState(store) ? { ...getLoadWeatherState(store).byKeys[key], key } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
//  */

// LOAD_EIGHT_TIMES_DATA: "LOAD_EIGHT_TIMES_DATA",
// FIVE_DAY_DATA: "FIVE_DAY_DATA",
// SET_FILTER: "SET_FILTER",
// IS_HIDDEN: "IS_HIDDEN",
// LOAD_WEATHER: "LOAD_WEATHER",
// IS_CHECKED_TEMP: "IS_CHECKED_TEMP",
// WEATHER: "WEATHER",
// GRAPH_DATE_CLICKED: "GRAPH_DATE_CLICKED",
// ONE_DAY_WEATHER_DATA: "ONE_DAY_WEATHER_DATA",
// GET_PLAYERS: "GET_PLAYERS"


// export const getLoadWeather = store =>
//   getLoadWeatherList(store).map(id => getItemById(store, id));

// export const getLoadWeatherByVisibilityFilter = (store, visibilityFilter) => {
//   const allLoadWeather = getLoadWeather(store);
//   switch (visibilityFilter) {
//     case VISIBILITY_FILTERS.COMPLETED:
//       return allLoadWeather.filter(item=> item.completed);
//     case VISIBILITY_FILTERS.INCOMPLETE:
//       return allLoadWeather.filter(item=> !item.completed);
//     case VISIBILITY_FILTERS.ALL:
//     default:
//       return allLoadWeather;
//   }
// };