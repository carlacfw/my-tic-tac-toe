import { GAME_OVER, SQUARE_CLICKED, RESET_CLICKED } from '..'

function gameOver (squares, player) {
  return {
    type: GAME_OVER,
    payload: {
      winners: {
        squares,
        player
      }
    }
  }
}

function squareClicked (square) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      square
    }
  }
}
function resetClicked () {
  return {
    type: RESET_CLICKED
  }
}
export { gameOver, squareClicked, resetClicked }
