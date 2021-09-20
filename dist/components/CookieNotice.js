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
exports.CookieNotice = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
function CookieNotice() {
    var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
    function onClick() {
    }
    return ((0, jsx_runtime_1.jsxs)(Container, { children: ["This website uses cookies to improve your experience.", (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClick }, { children: "Okay" }), void 0)] }, void 0));
}
exports.CookieNotice = CookieNotice;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var templateObject_1;
