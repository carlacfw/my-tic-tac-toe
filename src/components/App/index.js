import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { Board, Square } from '..'
import { getPlayer } from '../../utilities'

/* The times function takes a function and an integer n,
 and returns an array of length n in which each item is created by calling the function
 which is passed the index of that cell in the array.
 So the first cell, the function is called with 0, the second cell it is called with 1, etc. */
// and using an even/odd function to alternate between player X and player O as we create the squares

function makeSquares (moves) {
  return times(square => {
    const player = getPlayer(square, moves)

    return isUndefined(player) ? (
      <Square
        key={square}
        index={square}
        handleClick={() => console.log(`Square ${square}`)}
      />
    ) : (
      <Square key={square} index={square} player={player} />
    )
  }, 9)
}

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.displayName = 'StyledApp'

export default function App ({ moves = [] }) {
  return (
    <StyledApp>
      <Board>{makeSquares(moves)}</Board>
    </StyledApp>
  )
}
