var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled, { css } from 'styled-components';
export default function Banner(props) {
    function onClick() {
        if (!props.to) {
            return;
        }
        window.open(props.to);
    }
    return (<NonFixedWrapper>
      <Container onClick={onClick} clickable={!!props.to}>
        {props.children}
      </Container>
    </NonFixedWrapper>);
}
export var NonFixedWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: relative;\nheight: 50px;\n"], ["\nposition: relative;\nheight: 50px;\n"])));
export var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nwidth: 100%;\nline-height: 3;\ntext-align: center;\nposition: fixed;\nbackground: white;\nbox-shadow: 0 0 10px rgba(0,0,0,.1);\nheight: 50px;\ntop: 0;\nz-index: 10;\n\n", "\n"], ["\nwidth: 100%;\nline-height: 3;\ntext-align: center;\nposition: fixed;\nbackground: white;\nbox-shadow: 0 0 10px rgba(0,0,0,.1);\nheight: 50px;\ntop: 0;\nz-index: 10;\n\n", "\n"])), function (props) { return props.clickable && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ncursor: pointer;\n&:hover {\n  text-decoration: underline;\n}\n"], ["\ncursor: pointer;\n&:hover {\n  text-decoration: underline;\n}\n"]))); });
var templateObject_1, templateObject_2, templateObject_3;
