var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Flex } from 'reflexbox';
import React from 'react';
import styled, { css } from 'styled-components';
import { ParagraphStyle } from './common';
export default function PageParagraph(props) {
    var align = '';
    if (props.right) {
        align = 'right';
    }
    else if (props.center) {
        align = 'center';
    }
    return (<NewSection>
      <ContainerWrapper>
        <Container align={align}>
          {props.children}
        </Container>
      </ContainerWrapper>
    </NewSection>);
}
var NewSection = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth: 100%;\n\n"], ["\nwidth: 100%;\n\n"])));
var ContainerWrapper = styled(Flex).attrs({
    alignItems: 'flex-start',
    flexDirection: 'column'
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth: 100%;\n"], ["\nwidth: 100%;\n"])));
var Container = styled(ParagraphStyle)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nposition: relative;\npadding: 0;\nflex-direction: column;\nmax-width: 700px;\n\n&&& p {\n}\n\n", "\n\n", "\n"], ["\nposition: relative;\npadding: 0;\nflex-direction: column;\nmax-width: 700px;\n\n&&& p {\n}\n\n", "\n\n", "\n"])), function (props) { return props.align === 'center' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: center;\n  & > * {\n    text-align: center;\n  }\n"], ["\n  align-self: center;\n  & > * {\n    text-align: center;\n  }\n"]))); }, function (props) { return props.align === 'right' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-self: flex-end;\n  & > * {\n    /* text-align: right; */\n  }\n"], ["\n  align-self: flex-end;\n  & > * {\n    /* text-align: right; */\n  }\n"]))); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
