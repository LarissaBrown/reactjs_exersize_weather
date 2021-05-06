
const isCheckedTempReducer = (state = false , action) => {

    switch(action.type){

        case 'IS_CHECKED_TEMP':
            return !state
        default:
            return state
}
}

export default isCheckedTempReducer