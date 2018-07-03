import React from 'react'
import styled from 'styled-components'

const StyledResetButton = styled.button`
  display: inline-block;
  justify-content: center;
  border-radius: 0;
  padding: 5px 15px;
  font-size: 20px;
  background: #ff0040;
  color: white;
  border: none;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`
StyledResetButton.defaultName = 'StyledResetButton'

export default function ResetButton ({ handleClick }) {
  return <StyledResetButton onClick={handleClick}>Reset Game</StyledResetButton>
}
