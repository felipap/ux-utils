"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
function AnimatedBlurBalls() {
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)("div", { className: "blurBall" }, void 0) }, void 0));
}
exports.default = AnimatedBlurBalls;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: absolute;\nheight: 10px;\n\n@media (max-width: 800px) {\n  // Hiding for mobile because the change in height is fucking up the layout\n  // (even though it's position absolute !?).\n  display: none;\n}\n\n@keyframes foobar {\n  0%, 100% {\n    width: 400px;\n    height: 400px;\n    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #E91E63;\n    filter: blur(60px);\n    transform: rotate(-30deg);\n    border-radius: 100px;\n  }\n  70% {\n    width: 400px;\n    height: 400px;\n    margin-right: 100px;\n    border-radius: 200px;\n    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #9B51E0;\n    filter: blur(70px);\n    transform: rotate(90deg);\n  }\n}\n\n.blurBall {\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  top: 15%;\n  z-index: -1;\n  opacity: .3;\n  animation: foobar 5s infinite;\n  background: linear-gradient(180deg, #2d9cdb, rgba(255,2r55,255,0)), #E91E63;\n}\n"], ["\nposition: absolute;\nheight: 10px;\n\n@media (max-width: 800px) {\n  // Hiding for mobile because the change in height is fucking up the layout\n  // (even though it's position absolute !?).\n  display: none;\n}\n\n@keyframes foobar {\n  0%, 100% {\n    width: 400px;\n    height: 400px;\n    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #E91E63;\n    filter: blur(60px);\n    transform: rotate(-30deg);\n    border-radius: 100px;\n  }\n  70% {\n    width: 400px;\n    height: 400px;\n    margin-right: 100px;\n    border-radius: 200px;\n    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #9B51E0;\n    filter: blur(70px);\n    transform: rotate(90deg);\n  }\n}\n\n.blurBall {\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  top: 15%;\n  z-index: -1;\n  opacity: .3;\n  animation: foobar 5s infinite;\n  background: linear-gradient(180deg, #2d9cdb, rgba(255,2r55,255,0)), #E91E63;\n}\n"])));
var templateObject_1;
