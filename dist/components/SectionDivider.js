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
exports.SectionDivider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var ColorPink = '#fdf8f7';
var ColorBackground = '#fff';
var ColorForeground = '#fafafa';
var HEIGHT = 115;
function SectionDivider(_a) {
    var _b = _a.from, from = _b === void 0 ? 'white' : _b, _c = _a.to, to = _c === void 0 ? 'white' : _c, _d = _a.flip, flip = _d === void 0 ? false : _d, _e = _a.straight, straight = _e === void 0 ? false : _e;
    from = from === 'rosa' ? ColorBackground : from;
    to = to === 'rosa' ? ColorBackground : to;
    from = from === 'white' ? ColorPink : from;
    to = to === 'white' ? ColorPink : to;
    // const size = useWindowSize()
    if (straight) {
        return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: "100%", height: "6", viewBox: "0 0 1440 5", fill: "none", preserveAspectRatio: "none" }, { children: (0, jsx_runtime_1.jsx)("line", { x1: "0", y1: "0", x2: "1440", y2: "0", strokeWidth: 5, stroke: "rgba(0,0,0,.05)" }, void 0) }), void 0) }, void 0));
    }
    // if (seed % 2) {
    // }
    // if (typeof window !== `undefined`) {
    //   return null
    // }
    var height = (0, react_1.useMemo)(function () {
        return Math.trunc(100 + Math.random() * 60);
    }, []);
    var path = (0, react_1.useMemo)(function () {
        return ((0, jsx_runtime_1.jsx)("path", { d: "M989.098 82.5005C1127.82 69.9827 1292.82 73.1904 1398.44 93.7659C1514.13 116.306 1545.52 64.1653 1439.43 12.068L-26.8619 0.640747L-18.6162 110.583C-5.20178 117.975 79.0507 102.021 155.269 102.021C231.487 102.021 472.338 114.341 562.275 114.341C652.213 114.341 850.38 95.0184 989.098 82.5005Z", fill: from, strokeWidth: 7, stroke: "rgba(0,0,0,.0)" }, void 0));
    }, []);
    return ((0, jsx_runtime_1.jsx)(Container, __assign({ style: { background: to, height: height, marginTop: 0 } }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ style: { marginTop: -30 }, width: "100%", height: HEIGHT, viewBox: "0 0 1440 115", fill: "none", preserveAspectRatio: "none" }, { children: path }), void 0) }), void 0));
}
exports.SectionDivider = SectionDivider;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\noverflow: hidden;\n\nsvg {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  & {\n    margin: 0 !important;\n    height: 0 !important;\n  }\n}\n"], ["\noverflow: hidden;\n\nsvg {\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  & {\n    margin: 0 !important;\n    height: 0 !important;\n  }\n}\n"])));
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    var _a = (0, react_1.useState)({
        width: undefined,
        height: undefined
    }), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
var templateObject_1;
