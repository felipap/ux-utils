var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { motion } from 'framer-motion';
import React from 'react';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import { SectionGroup, Section, ParagraphStyle, FadeInSection } from './common';
export default function CallToAction(_a) {
    var _b = _a.white, white = _b === void 0 ? false : _b;
    function onClick() {
        if (typeof window !== 'undefined') {
            window.location.href = '/#form';
        }
    }
    return (<SectionGroup white={white} style={{ overflow: 'visible' }}>
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
              <motion.img alt="retention chart" src="/awwdience/repeat_up_2x.png" whileHover={{ y: [0, 5] }} transition={{ ease: 'easeOut', duration: 0.3 }} width={440}/>
            </ScreenWrapper>
          </Box>
        </Flex>
      </Section>
    </SectionGroup>);
}
var ScreenWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nimg {\n  box-shadow: 0 0 15px rgba(0,0,0,.1);\n  /* border: 1px solid black; */\n  max-width: 100%;\n  border-radius: 7px;\n}\n"], ["\n\nimg {\n  box-shadow: 0 0 15px rgba(0,0,0,.1);\n  /* border: 1px solid black; */\n  max-width: 100%;\n  border-radius: 7px;\n}\n"])));
var templateObject_1;
