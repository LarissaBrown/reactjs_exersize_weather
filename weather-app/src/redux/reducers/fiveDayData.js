
const fiveDayDataReducer = (state = [] , action) => {

    switch(action.type){

        case 'FIVE_DAY_DATA':
            return action.payload
        case "CLEAR_FIVE_DAY_DATA":
            return [];
        default:
            return state;
}
}

export default fiveDayDataReducer


