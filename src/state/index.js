import { GAME_OVER, SQUARE_CLICKED, RESET_CLICKED } from './constants'
import { gameOver, squareClicked, resetClicked } from './actions'
import { initialState, rootReducer } from './reducers'
import { getMoves, getWinningPlayer, getWinningSquares } from './selectors'
import configureStore from './store'

export {
  configureStore,
  gameOver,
  GAME_OVER,
  getMoves,
  getWinningPlayer,
  getWinningSquares,
  initialState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked,
  resetClicked,
  RESET_CLICKED
}
