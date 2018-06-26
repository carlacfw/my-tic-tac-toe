import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  border-color: #00e6e6;
  border-style: solid;
  border-width: 0 ${props => (props.index % 3 === 2 ? 0 : '2px')}
    ${props => (props.index < 6 ? '2px' : 0)} 0;
  color: ${props =>
    props.player === 'x' ? 'hsla(24, 100%, 50%)' : 'hsla(336, 100%, 50%)'};
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square (props) {
  return (
    <StyledSquare index={props.index} player={props.player}>
      {props.player}
    </StyledSquare>
  )
}
