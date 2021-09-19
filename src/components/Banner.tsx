
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled, { css } from 'styled-components'

interface Props {
  to?: string
  children: React.ReactNode
}

export default function Banner(props: Props) {
  function onClick() {
    if (!props.to) {
      return
    }
    window.open(props.to)
  }

  return (
    <NonFixedWrapper>
      <Container onClick={onClick} clickable={!!props.to}>
        {props.children}
      </Container>
    </NonFixedWrapper>
  )
}

export const NonFixedWrapper = styled.div`
position: relative;
height: 50px;
`

export const Container = styled.div`
width: 100%;
line-height: 3;
text-align: center;
position: fixed;
background: white;
box-shadow: 0 0 10px rgba(0,0,0,.1);
height: 50px;
top: 0;
z-index: 10;

${props => props.clickable && css`
cursor: pointer;
&:hover {
  text-decoration: underline;
}
`}
`
