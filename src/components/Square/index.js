import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: #00e6e6;
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  color: ${({ player }) => (player === 'x' ? '#ff0066' : '#ff3300')};
  cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')};
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square ({ handleClick, index, player }) {
  return (
    <StyledSquare index={index} player={player} onClick={handleClick}>
      {player}
    </StyledSquare>
  )
}
