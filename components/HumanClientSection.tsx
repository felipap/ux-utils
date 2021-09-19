import { Box, Flex } from 'reflexbox'
import React from 'react'
import styled from 'styled-components'
import { Section } from '@aww-sites/shared/components/common'
import { Paragraph } from 'theme-ui'
import { HStack, PaddedContainer } from './theme'

export default function IndexClientSection() {
  return (
    <PaddedContainer>
      <HStack>
        <Box width={[1, 1, 1 / 2]}>
          <Paragraph>We wouldn't be here without these fantastic brands</Paragraph>
        </Box>
        <Box width={[1, 1, 1 / 2]} paddingTop={[30, 0, 0]}>
          <LogoWrapper>
            <img
              alt='Logo of Duty Cosméticos'
              className='invertable'
              srcSet='/awwdience/duty-black.png 2x'
            />
            {/* <img alt="" className="invertable" srcSet="/awwdience/beleaf-black.png 2x" /> */}
            <img
              alt='Logo of Movin'
              className='invertable'
              srcSet='/awwdience/movin-black.png 2x'
            />
            <img
              alt='Logo of Vivienne Black'
              className='invertable'
              srcSet='/awwdience/vivienne-black.png 2x'
            />
          </LogoWrapper>
        </Box>
      </HStack>
    </PaddedContainer>
  )
}

const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;

  img {
    margin: 20px 25px 20px 25px;
    height: 33px;
  }
`
