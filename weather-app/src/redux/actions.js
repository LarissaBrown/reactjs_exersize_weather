import axios from "axios";
import { v4 } from "uuid";
import {
  ONE_DAY_WEATHER_DATA,
  LOAD_EIGHT_TIMES_DATA,
  FIVE_DAY_DATA,
  IS_LOADED_TOGGLE,
  CLEAR_WEATHER,
  CLEAR_FIVE_DAY_DATA,
  GET_WEATHER,
  //  LOAD_WEATHER,
  SET_FILTER,
  IS_CHECKED_TEMP,
  GRAPH_DATE_CLICKED,
  CLEAR_GET_PLAYERS,
  GET_PLAYERS,
} from "./actionTypes";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const isLoadedToggle = () => ({
  type: IS_LOADED_TOGGLE,
  payload: false,
});

export const isCheckedTemp = () => {
  return {
    type: IS_CHECKED_TEMP,
    payload: isCheckedTemp,
  };
};

//  export const clearFiveDayData = fiveDayData => ({
//   type: 'CLEAR_FIVE_DAY_DATA',
//    fiveDayData,
// });






export const clearFiveDayData = () => ({ type: "CLEAR_FIVE_DAY_DATA" });

export const fetchFiveDayData = (weather) => {

  
  return async (dispatch) => {
  try{  weather.filter((item, index) => {
      //first item
      const currentDate = item.dt_txt.split(" ")[0];
      //next item
      const nextDate = weather[index + 1].dt_txt.split(" ")[0];
      //  console.log(weather[index + 1].dt_txt.split(' ')[0])
      //  console.log(item.dt_txt.split(' ')[0])
      let arr = [];
      while (arr.length <= 5) {
        if (currentDate === nextDate) {
          arr.push(item);
          return item;
        }
      }
    
      console.log("arr jadslksfhadpoifhofhs", arr);
        
      return {
        type: FIVE_DAY_DATA,
        payload: weather,
      };
    });
    } catch (error) {
      console.error(error);
      dispatch(clearFiveDayData());

      return {
        type: CLEAR_FIVE_DAY_DATA,
        payload: [],
      };
    }
  };
}


//EXAMPLES
//  export const clearWeather = weather => ({
//   type: 'CLEAR_WEATHER',
//    weather,
// });

// export const loadWeather = (isLoaded) => {

//   return async dispatch => {
//       await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
//           .then(response => {

//               weather = response.data.list
//               return dispatch({
//                   type: LOAD_WEATHER,
//                   payload: {weather, isLoaded}

//               })

//           })
//           .catch(err => {
//               console.log(err)
//           })

//   }

// }

export const clearWeather = () => ({ type: "CLEAR_WEATHER" });

export const getWeather = (isLoaded) => {
  console.log("!isLoaded", !isLoaded);

  return async (dispatch) => {
    await axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
      )
      .then((response) => {
        const weather = response.data.list;
        console.log("response", weather);
        dispatch(fetchFiveDayData(weather));
        return {
          type: GET_WEATHER,
          payload: weather,
        };
      })
      .then(() => {
        dispatch(isLoadedToggle());
        return {
          type: IS_LOADED_TOGGLE,
          payload: isLoadedToggle.payload,
        };
      })
      .catch((error) => {
        console.error(error);
        dispatch(clearWeather());

        return {
          type: CLEAR_WEATHER,
          payload: [],
        };
      });
  };
};








export const clearGetPlayers = () => ({ type: "CLEAR_GET_PLAYERS" });

export const getPlayers = (fiveDayData, weather, isLoaded) => {
  console.log("fiveDayData", fiveDayData);
  console.log("weather", weather);
  console.log("!isLoaded", !isLoaded);
  return async (dispatch) => {
    try {
      const _localItems = fiveDayData.map((_localItem) => {
        let key = v4();
        let celcius = Math.floor(_localItem.main.temp - 273.15);
        let fahrenheit = Math.floor(
          ((_localItem.main.temp - 273.15) * 9) / 5 + 32
        );
        let date = _localItem.dt_txt.split(" ")[0];
        let desc = _localItem.weather[0].main;
        // let image = require(`"./reducers/assets/${_localItem.weather[0].main}_Munich.jpg"`)

        return {
          type: GET_PLAYERS,
          payload: {
            player: {
              key: key,
              celcius: celcius,
              fahrenheit: fahrenheit,
              date: date,
              desc: desc,
              // image: image
            },
          },
        };
      });

      return {
        type: GET_PLAYERS,
        payload: [..._localItems],
      };
    } catch (error) {
      console.error(error);
      dispatch(clearGetPlayers());
      return {
        type: CLEAR_GET_PLAYERS,
        payload: [],
      };
    }
  };
};

// This is your typical redux sync action
// function syncAction(listOfThings) {
//   return { type: 'ADD_THINGS', things: listOfThings  }
// }

// This would be the async version
// where we may need to go fetch the
// list of things from a server before
// adding them via the sync action
// function asyncAction() {
//   return function(dispatch) {
//     setTimeout(function() {
//       dispatch(syncAction(['list', 'of', 'things']));
//     }, 1000);
//   }
// }

// let nextId = 0;

// export const loadWeather = (isLoaded) => {

//   return async dispatch => {
//       await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
//           .then(response => {

//               weather = response.data.list
//               return dispatch({
//                   type: LOAD_WEATHER,
//                   payload: {weather, isLoaded}

//               })

//           })
//           .catch(err => {
//               console.log(err)
//           })

//   }

// }

export const fetchOneDayWeatherData = (weather) => {
  let oneDayWeatherData = weather.map(
    (item) => item.dt_txt.split(" ")[1] === "00:00:00" && item
  );
  return {
    type: ONE_DAY_WEATHER_DATA,
    payload: { oneDayWeatherData },
  };
};

export const loadEightTimesData = (oneDayWeatherData) => {
  const eightTimesData = oneDayWeatherData.map((item) => {
    if (eightTimesData === []) {
      eightTimesData.push(item.dt_txt.split(" ")[0]);
    } else if (eightTimesData[0] === item.dt_txt.split(" ")[0]) {
      eightTimesData.push(item.dt_txt.split(" ")[0]);
    } else if (eightTimesData[0] !== item.dt_txt.split(" ")[0]) {
      return eightTimesData;
    }
    return eightTimesData;
  });

  return {
    type: LOAD_EIGHT_TIMES_DATA,
    payload: { eightTimesData },
  };
};

let threeHourData = [];

export function graphDateClicked(i, weather) {
  weather.map((cardItem, index) => {
    if (i === index || index < i + 7) {
      threeHourData.push(cardItem);
    }
    if (threeHourData.length === 8) {
      threeHourData = [...threeHourData, cardItem];
      console.log("threeHourDataLength", threeHourData.length);
    }
    return threeHourData;
  });
  return {
    type: GRAPH_DATE_CLICKED,
    payload: { threeHourData },
  };
}
