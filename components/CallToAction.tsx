
import { motion } from 'framer-motion'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { SectionGroup, Section, MaxWidth, ParagraphStyle, FadeInSection } from './common'

export default function CallToAction({ white = false }: { white?: boolean }) {
  function onClick() {
    if (typeof window !== 'undefined') {
      window.location.href = '/#form'
    }
  }

  return (
    <SectionGroup white={white} style={{ overflow: 'visible' }}>
      <Section>
        <Flex width={1} margin="auto" flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <Box width={[1, 1, 0.5]}>
            <FadeInSection>
              <ParagraphStyle>
                <h1>
                  Retaining customers should be easy
                </h1>
                <p>
                  Let us show you a better way to keep your fans coming back for more.
                </p>
              </ParagraphStyle>
            </FadeInSection>
          </Box>
          <Box alignSelf="flex-end" style={{ position: 'relative' }} textAlign="center">
            <ScreenWrapper>
              <motion.img
                alt="retention chart"
                src="/awwdience/repeat_up_2x.png"
                whileHover={{ y: [0, 5] }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
                width={440}
              />
            </ScreenWrapper>
          </Box>
        </Flex>
      </Section>
    </SectionGroup>
  )
}

const ScreenWrapper = styled.div`

img {
  box-shadow: 0 0 15px rgba(0,0,0,.1);
  /* border: 1px solid black; */
  max-width: 100%;
  border-radius: 7px;
}
`
