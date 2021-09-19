
import React from 'react'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'


interface Props {
  message: string,
  authorName: string,
  authorCompany: string,
  authorAvatarUrl: string,
}

export default function QuoteBox(props: Props) {
  return (
    <Container className="quote-box">
      <h2>{props.message}</h2>

      <QuoteSource {...props} />
    </Container>
  )
}

const Container = styled(Box)`
/* padding: 20px;
background: white;
width: 400px;
border: 2px solid black;
align-items: center;
border-radius: 10% 19% 13% 13% / 14% 10% 13% 16%; */

h2 {
  font-size: 2.2em;
  font-weight: 400;
  color: inherit;
}

p {
  font-size: 1em;
  margin-bottom: 0;
}
`

export function QuoteSource(props: Props) {
  return (
    <QuoteSourceContainer>
      <img alt="author avatar" src={props.authorAvatarUrl} />
      <Box display="block">
        <div>
          {props.authorName}
        </div>
        <div>
          {props.authorCompany}
        </div>
      </Box>
    </QuoteSourceContainer>
  )
}

const QuoteSourceContainer = styled.div`
display: flex;
align-items: center;
text-align: left;
font-size: 1.5em;
font-weight: 500;
border-top: 3px dashed #44444411;
margin-top: 30px;
padding-top: 30px;

img {
  margin-right: 15px;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50% 49% 47% 53% / 44% 58% 62% 36%;
}
`