const initialState = []

const weatherSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload)
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    isLoaded(state = false, action){
      state.push(action.payload)
  }

}})

export const { loadWeather, fetchFiveDayData, todosLoading, 
  fetchOneDayWeatherData, getPlayers, loadEightTimesData, graphDayClicked } = weatherSlice.actions

export default weatherSlice.reducer       