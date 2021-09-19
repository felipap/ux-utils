import React, { useMemo } from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { Container } from 'theme-ui'
import { AWWDIENCE_WEBSITE, SUPPORT_EMAIL } from '../common'
import { BorderWidth, ColorForeground } from './common'
import { Divider, PaddedContainer } from './theme'

export default function Footer() {
  return (
    <>
      <Divider />
      <PaddedContainer
        sx={{ borderTop: `${BorderWidth}gpx solid ${ColorForeground}`, overflow: 'visible' }}
      >
        <FooterContainer>
          <Flex
            width={1}
            margin='auto'
            flexWrap='wrap'
            justifyContent='space-between'
            paddingY={[30, 40, 30]}
          >
            <Box width={[1, 1, 1 / 2]}>
              <p>
                Have a question? Get in touch!
                <br />
                <a className='email' href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                <br />
              </p>
              <NoSocialMedia>
                We're not on LinkedIn. <em>We're busy getting work done.</em>
              </NoSocialMedia>
              {/* <p>
            Awwdience is a product of Human AI, Inc. <a href="https://human.fan">Learn more about us.</a>
          </p> */}
            </Box>
            <Box width={[1, 1, 1 / 2]} textAlign={['left', 'left', 'right']}>
              <p>
                East Rock, New Haven, CT <InvertBack>🇺🇸</InvertBack>
                <br />
                Jardim Botânico, Rio de Janeiro, Brazil <InvertBack>🇧🇷</InvertBack>
                <br />
              </p>
              <p>
                <YaleSign />
              </p>
            </Box>
          </Flex>
          <FooterDivider />
          <BottomOne
            width={1}
            margin='auto'
            flexWrap='wrap'
            justifyContent='space-between'
            paddingTop={20}
            paddingBottom={0}
          >
            <Box width={[1, 1, 1 / 2]}>
              Copyright {new Date().getFullYear()} &copy;
              <a href='https://human.fan'>Human AI, Inc</a>. All Rights Reserved
            </Box>
            <Box width={[1, 1, 1 / 2]} textAlign={['left', 'left', 'right']}>
              <a href={`${AWWDIENCE_WEBSITE}/privacy`}>Terms and Conditions</a>
              <a href={`${AWWDIENCE_WEBSITE}/privacy`}>Privacy Policy</a>
            </Box>
          </BottomOne>
        </FooterContainer>
        <Divider big />
      </PaddedContainer>
    </>
  )
}

export const FooterDivider = styled.div`
  border-top: 3px solid ${props => props.theme.colorForeground ?? ColorForeground};
`

export function YaleSign() {
  const sentence = useMemo(() => {
    if (typeof window !== 'undefined') {
      const options = [
        'Designed under the trees of',
        'Sketched on the blackboards of',
        'Developed during late nights at',
        // 'Built by hard-working people at',
        'Done instead of homework from'
      ]
      return options[Math.floor(options.length * Math.random())]
    }
  }, [])

  return (
    <p>
      {sentence}
      <br />
      <img
        height={35}
        style={{ marginTop: 5 }}
        alt='Yale University logo'
        srcSet='/shared/yale-black.png 2x'
      />
    </p>
  )
}

const InvertBack = styled.span`
  /* filter:invert(1); */
  display: inline;
`

const BottomOne = styled(Flex)`
  font-size: 12px;

  a {
    margin-left: 10px;
  }
`

const FooterContainer = styled.div`
  border-bottom: 20px;

  a.email {
    font-size: 20px;
    font-weight: 300;
  }

  @media (min-width: 1100px) {
    a.email {
      font-size: 40px;
    }
  }

  a {
    color: inherit;
    padding-bottom: 3px;
    border-bottom: 2px solid #ffffff26;
    transition: all 200ms;

    &:hover {
      border-bottom: 2px solid #ffffff77;
    }
  }

  p {
    letter-spacing: 0.5px;
    font-size: 15px;
    margin-bottom: 2em;
    font-weight: 400;
    line-height: 2;
  }
`

const NoSocialMedia = styled.p`
  opacity: 0.4;
  em {
    text-decoration: line-through;
  }
`
