var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useRef } from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
export default function EmailCapture() {
    var emailRef = useRef(null);
    if (typeof window === 'undefined') {
        return null;
    }
    function onSubmit(event) {
        event.preventDefault();
        if (typeof window !== 'undefined') {
            // Yes super hacky. Not sorry.
            // @ts-ignore
            window.formModalOrigin = 'form';
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            window.formModalEmail = (emailRef === null || emailRef === void 0 ? void 0 : emailRef.current) ? emailRef.current.value : null;
            emailRef.current.value = '';
            setTimeout(function () {
                window.location.href = '/#form';
            }, 200);
        }
    }
    return (<Container>
      <Flex flexDirection="row" width={[1, 300]} flexWrap="wrap" justifyContent="space-between">
        <form onSubmit={onSubmit}>
          <div className="visible-elements">
            <input type="text" name="email" placeholder="Enter your email" ref={emailRef}/>
            <button type="submit">
              Get Started
            </button>
          </div>
        </form>
      </Flex>
    </Container>);
}
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nfont-size: 13px;\nmax-height: 150px;\noverflow: hidden;\nfont-family: Inter;\n\nsmall {\n  display: none !important;\n  line-height: 0 !important;\n  margin: 0 !important;\n}\n\na[href=\"https://kwes.io/\"] {\n  opacity: 0 !important;\n  height: 0 !important;\n  height: 0 !important;\n}\n\n\n@media (max-width: 800px) {\n  font-size: 13px;\n\n  input {\n    width: 80% !important;\n  }\n  button {\n  }\n}\n\n.visible-elements {\n  display: flex;\n  flex-direction: row;\n}\n\ninput {\n  width: 300px;\n  max-width: 60%;\n  color: black;\n  display: inline-block;\n  height: 50px;\n  vertical-align: center;\n  border: 1px solid #000;\n  border-radius: 3px;\n  outline: none;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 10px;\n  margin-right: 5px;\n  letter-spacing: 1px;\n  box-shadow: inset 0 0 2px #AAA;\n\n  transition: all 300ms;\n  &:focus {\n    box-shadow: inset -1px 1px 2px #AAA;\n  }\n}\n\ninput::placeholder {\n  letter-spacing: .5px;\n}\n\nbutton {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  font-size: 16px;\n  background: black;\n  height: 50px;\n  display: inline-block;\n  border: none;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);\n  outline: none;\n  padding: 0 1em;\n  transition: all 200ms;\n  font-family: 'Poppins', sans-serif;\n  color: white;\n  white-space: nowrap;\n\n  &:active {\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);\n  }\n}\n"], ["\nfont-size: 13px;\nmax-height: 150px;\noverflow: hidden;\nfont-family: Inter;\n\nsmall {\n  display: none !important;\n  line-height: 0 !important;\n  margin: 0 !important;\n}\n\na[href=\"https://kwes.io/\"] {\n  opacity: 0 !important;\n  height: 0 !important;\n  height: 0 !important;\n}\n\n\n@media (max-width: 800px) {\n  font-size: 13px;\n\n  input {\n    width: 80% !important;\n  }\n  button {\n  }\n}\n\n.visible-elements {\n  display: flex;\n  flex-direction: row;\n}\n\ninput {\n  width: 300px;\n  max-width: 60%;\n  color: black;\n  display: inline-block;\n  height: 50px;\n  vertical-align: center;\n  border: 1px solid #000;\n  border-radius: 3px;\n  outline: none;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 10px;\n  margin-right: 5px;\n  letter-spacing: 1px;\n  box-shadow: inset 0 0 2px #AAA;\n\n  transition: all 300ms;\n  &:focus {\n    box-shadow: inset -1px 1px 2px #AAA;\n  }\n}\n\ninput::placeholder {\n  letter-spacing: .5px;\n}\n\nbutton {\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  font-size: 16px;\n  background: black;\n  height: 50px;\n  display: inline-block;\n  border: none;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);\n  outline: none;\n  padding: 0 1em;\n  transition: all 200ms;\n  font-family: 'Poppins', sans-serif;\n  color: white;\n  white-space: nowrap;\n\n  &:active {\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);\n  }\n}\n"])));
var templateObject_1;
