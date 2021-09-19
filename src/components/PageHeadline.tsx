
import { Box, Flex } from 'reflexbox'
import React from 'react'
import styled, { css } from 'styled-components'
import { Section } from './common'

interface Props {
  children: React.ReactNode,
  center?: boolean,
  right?: boolean,
}

export default function PageHeadline(props: Props) {
  let align = ''
  if (props.right) {
    align = 'right'
  } else if (props.center) {
    align = 'center'
  }

  return (
    <NewSection>
      <ContainerWrapper>
        <Container align={align}>
          {props.children}
        </Container>
      </ContainerWrapper>
    </NewSection>
  )
}

const NewSection = styled(Section)`
padding-bottom: 30px;
`

const ContainerWrapper = styled(Flex).attrs({
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingX: [20, 20, 20, 0],
})`
width: 100%;
`

const Container = styled.div<{ align: string }>`
padding: 0;
flex-direction: column;

${props => props.align === 'center' && css`
  align-self: center;
  & > * {
    text-align: center;
  }
`}

${props => props.align === 'right' && css`
  align-self: flex-end;
  & > * {
    text-align: right;
  }
`}

max-width: 800px;

h1 {
  font-weight: 600;
}
`