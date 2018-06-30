import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { Square } from '../../containers'

/* The times function takes a function and an integer n,
 and returns an array of length n in which each item is created by calling the function
 which is passed the index of that cell in the array.
 So the first cell, the function is called with 0, the second cell it is called with 1, etc. */
// and using an even/odd function to alternate between player X and player O as we create the squares

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`

export default function App () {
  return (
    <StyledApp>
      <Board>
        {times(square => <Square key={square} index={square} />, 9)}
      </Board>
    </StyledApp>
  )
}
