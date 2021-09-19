var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components';
export default function QuoteBox(props) {
    return (<Container className="quote-box">
      <h2>{props.message}</h2>

      <QuoteSource {...props}/>
    </Container>);
}
var Container = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n/* padding: 20px;\nbackground: white;\nwidth: 400px;\nborder: 2px solid black;\nalign-items: center;\nborder-radius: 10% 19% 13% 13% / 14% 10% 13% 16%; */\n\nh2 {\n  font-size: 2.2em;\n  font-weight: 400;\n  color: inherit;\n}\n\np {\n  font-size: 1em;\n  margin-bottom: 0;\n}\n"], ["\n/* padding: 20px;\nbackground: white;\nwidth: 400px;\nborder: 2px solid black;\nalign-items: center;\nborder-radius: 10% 19% 13% 13% / 14% 10% 13% 16%; */\n\nh2 {\n  font-size: 2.2em;\n  font-weight: 400;\n  color: inherit;\n}\n\np {\n  font-size: 1em;\n  margin-bottom: 0;\n}\n"])));
export function QuoteSource(props) {
    return (<QuoteSourceContainer>
      <img alt="author avatar" src={props.authorAvatarUrl}/>
      <Box display="block">
        <div>
          {props.authorName}
        </div>
        <div>
          {props.authorCompany}
        </div>
      </Box>
    </QuoteSourceContainer>);
}
var QuoteSourceContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\ntext-align: left;\nfont-size: 1.5em;\nfont-weight: 500;\nborder-top: 3px dashed #44444411;\nmargin-top: 30px;\npadding-top: 30px;\n\nimg {\n  margin-right: 15px;\n  width: 3.5em;\n  height: 3.5em;\n  border-radius: 50% 49% 47% 53% / 44% 58% 62% 36%;\n}\n"], ["\ndisplay: flex;\nalign-items: center;\ntext-align: left;\nfont-size: 1.5em;\nfont-weight: 500;\nborder-top: 3px dashed #44444411;\nmargin-top: 30px;\npadding-top: 30px;\n\nimg {\n  margin-right: 15px;\n  width: 3.5em;\n  height: 3.5em;\n  border-radius: 50% 49% 47% 53% / 44% 58% 62% 36%;\n}\n"])));
var templateObject_1, templateObject_2;
