import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// We'll soon revisit the initial state of this application.
const initialState = {
    grid: [Array(20).fill('')],
    selectedColor: 'red'
}

// ACTION TYPES
/* we'll add some action types soon */
const ADD_ROW = 'ADD_ROW'
const CHANGE_COLOR = "CHANGE_COLOR"
// ACTION CREATORS
/* we'll also add the corresponding action creators */
export const addRow = () => ({ type: ADD_ROW })
export const changeColor = (color)=> ({type: CHANGE_COLOR, color})

// And we'll revisit this reducer.
function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_ROW:
          const numCols = state.grid[0].length
          const newRow = Array(numCols).fill('')
          // by using the spread operator, we return a *new* object, not a mutated one
          return { ...state, grid: [...state.grid, newRow] }
        case CHANGE_COLOR:
            console.log("state", state)
            return {...state, selectedColor: action.color}
        default:
          return state
      }
}

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
)

export default store