


function eightTimesDataReducer(state = [] , action){

    switch(action.type){

        case 'LOAD_EIGHT_TIMES_DATA':
            const { oneDayWeatherData, eightTimesData } = action.payload;
            return [oneDayWeatherData, eightTimesData]
        default:
            return state
}
}

export default eightTimesDataReducer
