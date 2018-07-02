import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: #00e6e6;
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  cursor: default;
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.defaultName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  color: ${({ player }) => (player === 'x' ? '#ff0066' : '#ff3300')};
`
SquarePlayed.defaultName = 'SquarePlayed'

const SquareLost = StyledSquare.extend`
  color: hsla(0, 0%, 90%, 1);
`
SquareLost.defaultName = 'SquareLost'

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`
SquarePlayable.defaultName = 'SquarePlayable'

export default function Square ({
  handleClick,
  index,
  isWinningSquare,
  player
}) {
  if (isUndefined(isWinningSquare)) {
    return isUndefined(player) ? (
      <SquarePlayable index={index} onClick={handleClick} />
    ) : (
      <SquarePlayed index={index} player={player}>
        {player}
      </SquarePlayed>
    )
  }

  if (isUndefined(player)) {
    return <StyledSquare index={index} />
  }

  return isWinningSquare ? (
    <SquarePlayed index={index} player={player}>
      {player}
    </SquarePlayed>
  ) : (
    <SquareLost index={index} player={player}>
      {player}
    </SquareLost>
  )
}
