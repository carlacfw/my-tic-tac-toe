import { isUndefined } from 'ramda-adjunct'

import { GAME_OVER, SQUARE_CLICKED, RESET_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  const { square, winners: { squares, player } = {} } = payload

  switch (type) {
    case GAME_OVER:
      return {
        ...state,
        winningSquares: squares,
        winningPlayer: player
      }
    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(square) ? state.moves : [...state.moves, square]
      }
    case RESET_CLICKED:
      return initialState

    default:
      return state
  }
}

export { initialState, rootReducer }
// remember, the ...state is copying the old state that will be changed
