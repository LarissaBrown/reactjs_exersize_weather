
function _localItemsReducer(state = [], action){



  switch (action.type) {

    case 'GET_PLAYERS': 
      const { newFiveDayDataPlayers } = action.payload
      return {newFiveDayDataPlayers}
    default:
      return state;
    }
}

export default _localItemsReducer

