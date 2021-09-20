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
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var reflexbox_1 = require("reflexbox");
var styled_components_1 = __importDefault(require("styled-components"));
var common_1 = require("./common");
function CallToAction(_a) {
    var _b = _a.white, white = _b === void 0 ? false : _b;
    function onClick() {
        if (typeof window !== 'undefined') {
            window.location.href = '/#form';
        }
    }
    return ((0, jsx_runtime_1.jsx)(common_1.SectionGroup, __assign({ white: white, style: { overflow: 'visible' } }, { children: (0, jsx_runtime_1.jsx)(common_1.Section, { children: (0, jsx_runtime_1.jsxs)(reflexbox_1.Flex, __assign({ width: 1, margin: "auto", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(reflexbox_1.Box, __assign({ width: [1, 1, 0.5] }, { children: (0, jsx_runtime_1.jsx)(common_1.FadeInSection, { children: (0, jsx_runtime_1.jsxs)(common_1.ParagraphStyle, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Retaining customers should be easy" }, void 0), (0, jsx_runtime_1.jsx)("p", { children: "Let us show you a better way to keep your\u00A0fans coming back for more." }, void 0)] }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(reflexbox_1.Box, __assign({ alignSelf: "flex-end", style: { position: 'relative' }, textAlign: "center" }, { children: (0, jsx_runtime_1.jsx)(ScreenWrapper, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { alt: "retention chart", src: "/awwdience/repeat_up_2x.png", whileHover: { y: [0, 5] }, transition: { ease: 'easeOut', duration: 0.3 }, width: 440 }, void 0) }, void 0) }), void 0)] }), void 0) }, void 0) }), void 0));
}
exports.default = CallToAction;
var ScreenWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nimg {\n  box-shadow: 0 0 15px rgba(0,0,0,.1);\n  /* border: 1px solid black; */\n  max-width: 100%;\n  border-radius: 7px;\n}\n"], ["\n\nimg {\n  box-shadow: 0 0 15px rgba(0,0,0,.1);\n  /* border: 1px solid black; */\n  max-width: 100%;\n  border-radius: 7px;\n}\n"])));
var templateObject_1;
