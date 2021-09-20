"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteSource = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var reflexbox_1 = require("reflexbox");
var styled_components_1 = __importDefault(require("styled-components"));
function QuoteBox(props) {
    return ((0, jsx_runtime_1.jsxs)(Container, __assign({ className: "quote-box" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: props.message }, void 0), (0, jsx_runtime_1.jsx)(QuoteSource, __assign({}, props), void 0)] }), void 0));
}
exports.default = QuoteBox;
var Container = (0, styled_components_1.default)(reflexbox_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n/* padding: 20px;\nbackground: white;\nwidth: 400px;\nborder: 2px solid black;\nalign-items: center;\nborder-radius: 10% 19% 13% 13% / 14% 10% 13% 16%; */\n\nh2 {\n  font-size: 2.2em;\n  font-weight: 400;\n  color: inherit;\n}\n\np {\n  font-size: 1em;\n  margin-bottom: 0;\n}\n"], ["\n/* padding: 20px;\nbackground: white;\nwidth: 400px;\nborder: 2px solid black;\nalign-items: center;\nborder-radius: 10% 19% 13% 13% / 14% 10% 13% 16%; */\n\nh2 {\n  font-size: 2.2em;\n  font-weight: 400;\n  color: inherit;\n}\n\np {\n  font-size: 1em;\n  margin-bottom: 0;\n}\n"])));
function QuoteSource(props) {
    return ((0, jsx_runtime_1.jsxs)(QuoteSourceContainer, { children: [(0, jsx_runtime_1.jsx)("img", { alt: "author avatar", src: props.authorAvatarUrl }, void 0), (0, jsx_runtime_1.jsxs)(reflexbox_1.Box, __assign({ display: "block" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: props.authorName }, void 0), (0, jsx_runtime_1.jsx)("div", { children: props.authorCompany }, void 0)] }), void 0)] }, void 0));
}
exports.QuoteSource = QuoteSource;
var QuoteSourceContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\ntext-align: left;\nfont-size: 1.5em;\nfont-weight: 500;\nborder-top: 3px dashed #44444411;\nmargin-top: 30px;\npadding-top: 30px;\n\nimg {\n  margin-right: 15px;\n  width: 3.5em;\n  height: 3.5em;\n  border-radius: 50% 49% 47% 53% / 44% 58% 62% 36%;\n}\n"], ["\ndisplay: flex;\nalign-items: center;\ntext-align: left;\nfont-size: 1.5em;\nfont-weight: 500;\nborder-top: 3px dashed #44444411;\nmargin-top: 30px;\npadding-top: 30px;\n\nimg {\n  margin-right: 15px;\n  width: 3.5em;\n  height: 3.5em;\n  border-radius: 50% 49% 47% 53% / 44% 58% 62% 36%;\n}\n"])));
var templateObject_1, templateObject_2;
