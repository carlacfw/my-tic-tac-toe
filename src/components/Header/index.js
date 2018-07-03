import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 10px auto 10px auto;
  text-align: center;
  color: #ff0040;
  font-size: 40px;
`

const StyledText = styled.h1`
  margin: 0;
`

StyledHeader.displayName = 'StyledHeader'

export default function Header () {
  return (
    <StyledHeader>
      <StyledText>My tic-tac-toe</StyledText>
    </StyledHeader>
  )
}
