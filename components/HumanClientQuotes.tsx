
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { FadeInSection, Section } from './common'
import QuoteBox from './QuoteBox'

export default function HumanClientQuotes() {
  return (
    <Container>
      <FadeInSection>
        <Grid>
          <QuoteWrapper>
            <QuoteBox
              message="Awwdience allowed us to target offers at the 60% of our customer base that weren't responding to our email campaigns."
              authorName="Joana Massa"
              authorCompany="CRM Manager, Duty Cosméticos"
              authorAvatarUrl="/awwdience/people-pic3.jpg"
            />
          </QuoteWrapper>
          <QuoteWrapper>
            <QuoteBox
              message="Our clients are retaining 3x more through Facebook and Instagram ads alone than they are using traditional winback campaigns."
              authorName="Fernando Bilfinger"
              authorCompany="Human AI Inc."
              authorAvatarUrl="/fernando.png"
            />
          </QuoteWrapper>
        </Grid>
      </FadeInSection>
    </Container>
  )
}

const QuoteWrapper = styled(Box).attrs({
  width: [1, 1, 1, 0.48],
  marginTop: [30, 30, 30, 30]
})`
`

const Container = styled(Section)`
`

const Grid = styled(Flex)`
justify-content: space-between;
display: flex;
gap: 0px;
margin: 0;
flex-wrap: wrap;
list-style: none;
`
