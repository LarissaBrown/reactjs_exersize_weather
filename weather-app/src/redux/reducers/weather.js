const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return action.paylod;

    case "CLEAR_WEATHER":
      return [];
    default:
      return state;
  }
};

export default weatherReducer;
