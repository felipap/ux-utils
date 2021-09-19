
import { Box, Flex } from 'reflexbox'
import React from 'react'
import styled, { css } from 'styled-components'
import { ParagraphStyle, Section } from './common'

interface Props {
  children: React.ReactNode
  center?: boolean
  right?: boolean
}

export default function PageParagraph(props: Props) {
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

const NewSection = styled.div`
width: 100%;

`

const ContainerWrapper = styled(Flex).attrs({
  alignItems: 'flex-start',
  flexDirection: 'column'
})`
width: 100%;
`

const Container = styled(ParagraphStyle)<{ align: string }>`
position: relative;
padding: 0;
flex-direction: column;
max-width: 700px;

&&& p {
}

${props => props.align === 'center' && css`
  align-self: center;
  & > * {
    text-align: center;
  }
`}

${props => props.align === 'right' && css`
  align-self: flex-end;
  & > * {
    /* text-align: right; */
  }
`}
`
