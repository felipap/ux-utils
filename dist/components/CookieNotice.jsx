var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from 'react';
import styled from 'styled-components';
export function CookieNotice() {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    function onClick() {
    }
    return (<Container>
      This website uses cookies to improve your experience.
      <button onClick={onClick}>Okay</button>
    </Container>);
}
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var templateObject_1;
