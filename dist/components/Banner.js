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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.NonFixedWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
function Banner(props) {
    function onClick() {
        if (!props.to) {
            return;
        }
        window.open(props.to);
    }
    return ((0, jsx_runtime_1.jsx)(exports.NonFixedWrapper, { children: (0, jsx_runtime_1.jsx)(exports.Container, __assign({ onClick: onClick, clickable: !!props.to }, { children: props.children }), void 0) }, void 0));
}
exports.default = Banner;
exports.NonFixedWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: relative;\nheight: 50px;\n"], ["\nposition: relative;\nheight: 50px;\n"])));
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nwidth: 100%;\nline-height: 3;\ntext-align: center;\nposition: fixed;\nbackground: white;\nbox-shadow: 0 0 10px rgba(0,0,0,.1);\nheight: 50px;\ntop: 0;\nz-index: 10;\n\n", "\n"], ["\nwidth: 100%;\nline-height: 3;\ntext-align: center;\nposition: fixed;\nbackground: white;\nbox-shadow: 0 0 10px rgba(0,0,0,.1);\nheight: 50px;\ntop: 0;\nz-index: 10;\n\n", "\n"])), function (props) { return props.clickable && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ncursor: pointer;\n&:hover {\n  text-decoration: underline;\n}\n"], ["\ncursor: pointer;\n&:hover {\n  text-decoration: underline;\n}\n"]))); });
var templateObject_1, templateObject_2, templateObject_3;
