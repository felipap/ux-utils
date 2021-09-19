var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (<Container>
      <button data-testid='button' onClick={onClick}>
        {label}
      </button>
    </Container>);
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
export default Button;
var templateObject_1;
