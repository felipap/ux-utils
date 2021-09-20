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
var jsx_runtime_1 = require("react/jsx-runtime");
var reflexbox_1 = require("reflexbox");
var styled_components_1 = __importStar(require("styled-components"));
var common_1 = require("./common");
function PageHeadline(props) {
    var align = '';
    if (props.right) {
        align = 'right';
    }
    else if (props.center) {
        align = 'center';
    }
    return ((0, jsx_runtime_1.jsx)(NewSection, { children: (0, jsx_runtime_1.jsx)(ContainerWrapper, { children: (0, jsx_runtime_1.jsx)(Container, __assign({ align: align }, { children: props.children }), void 0) }, void 0) }, void 0));
}
exports.default = PageHeadline;
var NewSection = (0, styled_components_1.default)(common_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\npadding-bottom: 30px;\n"], ["\npadding-bottom: 30px;\n"])));
var ContainerWrapper = (0, styled_components_1.default)(reflexbox_1.Flex).attrs({
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingX: [20, 20, 20, 0],
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth: 100%;\n"], ["\nwidth: 100%;\n"])));
var Container = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\npadding: 0;\nflex-direction: column;\n\n", "\n\n", "\n\nmax-width: 800px;\n\nh1 {\n  font-weight: 600;\n}\n"], ["\npadding: 0;\nflex-direction: column;\n\n", "\n\n", "\n\nmax-width: 800px;\n\nh1 {\n  font-weight: 600;\n}\n"])), function (props) { return props.align === 'center' && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: center;\n  & > * {\n    text-align: center;\n  }\n"], ["\n  align-self: center;\n  & > * {\n    text-align: center;\n  }\n"]))); }, function (props) { return props.align === 'right' && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-self: flex-end;\n  & > * {\n    text-align: right;\n  }\n"], ["\n  align-self: flex-end;\n  & > * {\n    text-align: right;\n  }\n"]))); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
