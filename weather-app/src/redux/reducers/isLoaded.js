const isLoadedReducer = (state = true, action) => {

    switch(action.type){

        case 'IS_LOADED_TOGGLE':
            return action.payload
        default:
            return state
    }
}

export default isLoadedReducer