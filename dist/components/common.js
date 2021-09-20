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
exports.ParagraphStyle2 = exports.BenefitNumber = exports.RainbowSpan = exports.ArrowSvgBottom = exports.ArrowSvgRight0 = exports.SquiglyDivider = exports.SmallSquiglyDivider = exports.LogoNotificationContainer = exports.LogoNotification = exports.BlurBall = exports.FadeInSection = exports.RelativeBox = exports.CentralizedContainer = exports.SectionHeader = exports.SectionGroup = exports.PageHeader = exports.ParagraphStyle = exports.Section = exports.BorderWidth = exports.ColorBorder = exports.ColorForeground = exports.ColorBackground = exports.ColorPink = exports.MaxWidth = exports.LinkFontFamily = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var react_intersection_observer_1 = require("react-intersection-observer");
var reflexbox_1 = require("reflexbox");
var styled_components_1 = __importStar(require("styled-components"));
var theme_ui_1 = require("theme-ui");
exports.LinkFontFamily = 'Poppins, sans-serif';
exports.MaxWidth = 1150;
// export const ColorBackground = "#fdf8f7"
// export const ColorForeground = "#fff"
exports.ColorPink = '#fdf8f7';
exports.ColorBackground = '#fff';
exports.ColorForeground = '#fafafa';
// export const ColorForeground = '#fdf8f7'
// export const BORDER_COLOR = 'rgba(0,0,0,.1)'
exports.ColorBorder = 'rgba(0,0,0,1)';
exports.BorderWidth = 2;
exports.Section = (0, styled_components_1.default)(reflexbox_1.Box).attrs({})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 100%;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  /* overflow: hidden; // by default, might be overridden... */\n\n  > div,\n  > header,\n  > section {\n    max-width: ", "px;\n    width: 100%;\n    text-align: left;\n  }\n\n  @media (max-width: 800px) {\n    padding: 40px 20px 40px;\n    font-size: 12px;\n  }\n\n  p {\n    font-size: 20px;\n    line-height: 1.8;\n  }\n\n  a {\n    /* color: #ce00ff; */\n  }\n\n  h1,\n  h2,\n  h3 {\n    color: inherit;\n\n    i {\n      opacity: 0.6;\n    }\n  }\n"], ["\n  max-width: 100%;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  /* overflow: hidden; // by default, might be overridden... */\n\n  > div,\n  > header,\n  > section {\n    max-width: ", "px;\n    width: 100%;\n    text-align: left;\n  }\n\n  @media (max-width: 800px) {\n    padding: 40px 20px 40px;\n    font-size: 12px;\n  }\n\n  p {\n    font-size: 20px;\n    line-height: 1.8;\n  }\n\n  a {\n    /* color: #ce00ff; */\n  }\n\n  h1,\n  h2,\n  h3 {\n    color: inherit;\n\n    i {\n      opacity: 0.6;\n    }\n  }\n"])), function (props) { var _a; return ((_a = props.theme) === null || _a === void 0 ? void 0 : _a.maxWidth) || exports.MaxWidth; });
exports.ParagraphStyle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n\n  & > h1 {\n    color: inherit;\n    font-size: 1.2em;\n    line-height: 1.5;\n    /* letter-spacing: .5px; */\n    font-weight: 500;\n  }\n\n  & > h2 {\n    color: inherit;\n    font-size: 1em;\n    line-height: 1.4;\n    /* margin-bottom: 10px; */\n    max-width: 700px;\n  }\n\n  & > h4 {\n    color: inherit;\n    font-weight: 700;\n    line-height: 1.4;\n    font-size: 18px;\n    text-transform: uppercase;\n    opacity: 0.2;\n  }\n\n  & > h3 {\n    color: inherit;\n    font-weight: 500;\n    line-height: 1.4;\n    font-size: 22px;\n    /* opacity: .6; */\n    /* color: #bf0023; */\n  }\n\n  & > p {\n    margin-bottom: 1em;\n    line-height: 1.7;\n    font-weight: 400;\n    font-size: 1em;\n    color: #666;\n\n    strong,\n    a {\n      opacity: 1;\n      font-weight: 600;\n      color: #000;\n    }\n  }\n"], ["\n  font-size: 20px;\n\n  & > h1 {\n    color: inherit;\n    font-size: 1.2em;\n    line-height: 1.5;\n    /* letter-spacing: .5px; */\n    font-weight: 500;\n  }\n\n  & > h2 {\n    color: inherit;\n    font-size: 1em;\n    line-height: 1.4;\n    /* margin-bottom: 10px; */\n    max-width: 700px;\n  }\n\n  & > h4 {\n    color: inherit;\n    font-weight: 700;\n    line-height: 1.4;\n    font-size: 18px;\n    text-transform: uppercase;\n    opacity: 0.2;\n  }\n\n  & > h3 {\n    color: inherit;\n    font-weight: 500;\n    line-height: 1.4;\n    font-size: 22px;\n    /* opacity: .6; */\n    /* color: #bf0023; */\n  }\n\n  & > p {\n    margin-bottom: 1em;\n    line-height: 1.7;\n    font-weight: 400;\n    font-size: 1em;\n    color: #666;\n\n    strong,\n    a {\n      opacity: 1;\n      font-weight: 600;\n      color: #000;\n    }\n  }\n"])));
exports.PageHeader = (0, styled_components_1.default)(reflexbox_1.Flex).attrs({
    // width: [1, 1, MaxWidth],
    width: 1,
    margin: 'auto',
    flexDirection: 'column',
    paddingTop: [20, 20, 20, 50],
    // paddingBottom: [50, 50, 50, 50],
    paddingX: [20, 20, 20, 0]
    // alignText: ['left', null, null, null]
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: left;\n  color: black;\n  /* color: red; */\n  font-size: 17px;\n\n  ", ";\n\n  h1 {\n    /* letter-spacing: .5px; */\n    color: inherit;\n    font-size: 2.3em;\n    line-height: 1.5;\n    font-weight: 500;\n    margin-bottom: 0.3em;\n  }\n\n  h2 {\n    color: inherit;\n    font-size: 20px;\n    color: #000;\n    opacity: 0.9;\n    /* opacity: .6; */\n    font-weight: 400;\n    line-height: 1.4;\n    margin-bottom: 25px;\n  }\n\n  p {\n    opacity: 0.3;\n    font-weight: 500;\n    font-size: 16px;\n  }\n"], ["\n  text-align: left;\n  color: black;\n  /* color: red; */\n  font-size: 17px;\n\n  ", ";\n\n  h1 {\n    /* letter-spacing: .5px; */\n    color: inherit;\n    font-size: 2.3em;\n    line-height: 1.5;\n    font-weight: 500;\n    margin-bottom: 0.3em;\n  }\n\n  h2 {\n    color: inherit;\n    font-size: 20px;\n    color: #000;\n    opacity: 0.9;\n    /* opacity: .6; */\n    font-weight: 400;\n    line-height: 1.4;\n    margin-bottom: 25px;\n  }\n\n  p {\n    opacity: 0.3;\n    font-weight: 500;\n    font-size: 16px;\n  }\n"])), function (props) {
    return props.center && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      text-align: center !important;\n    "], ["\n      text-align: center !important;\n    "])));
});
exports.SectionGroup = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  overflow: hidden; // by default, might be overridden...\n  background: transparent;\n\n  ", "\n  ", "\n  ", "\n\nfilter: ", ";\n\n  @media (max-width: 800px) {\n    border-bottom: 2px solid #00000011;\n    border-bottom-width: ", ";\n  }\n\n  ", ";\n"], ["\n  overflow: hidden; // by default, might be overridden...\n  background: transparent;\n\n  ", "\n  ", "\n  ", "\n\nfilter: ", ";\n\n  @media (max-width: 800px) {\n    border-bottom: 2px solid #00000011;\n    border-bottom-width: ", ";\n  }\n\n  ", ";\n"])), function (props) {
    return props.black && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background: black;\n    "], ["\n      background: black;\n    "])));
}, function (props) {
    return props.white && (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), exports.ColorPink);
}, function (props) {
    return props.white &&
        props.invert && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background: white;\n    "], ["\n      background: white;\n    "])));
}, function (props) { return (props.invert ? 'invert(1)' : 'none'); }, function (props) {
    return (props.white && exports.ColorForeground) || props.invert ? '0' : '2px';
}, function (props) {
    return props.invert && (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      img:not(.invertable) {\n        filter: invert(1);\n      }\n\n      .revert {\n        filter: invert(1);\n      }\n    "], ["\n      img:not(.invertable) {\n        filter: invert(1);\n      }\n\n      .revert {\n        filter: invert(1);\n      }\n    "])));
});
exports.SectionHeader = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 30px;\n\n  ", "\n\n  @media (max-width: 800px) {\n    padding-left: 10px;\n  }\n\n  &&& {\n    h1 {\n      font-size: 1.4em;\n      text-transform: uppercase;\n      font-weight: 500;\n      letter-spacing: 1.5px;\n      opacity: 1;\n    }\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 30px;\n\n  ", "\n\n  @media (max-width: 800px) {\n    padding-left: 10px;\n  }\n\n  &&& {\n    h1 {\n      font-size: 1.4em;\n      text-transform: uppercase;\n      font-weight: 500;\n      letter-spacing: 1.5px;\n      opacity: 1;\n    }\n  }\n"])), function (props) {
    return props.center && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      text-align: center;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      h1 {\n        text-align: center;\n      }\n    "], ["\n      text-align: center;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      h1 {\n        text-align: center;\n      }\n    "])));
});
exports.CentralizedContainer = (0, styled_components_1.default)(exports.Section)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  h1 {\n    text-align: center;\n    margin-bottom: 40px;\n    font-size: 22px;\n  }\n"], ["\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  h1 {\n    text-align: center;\n    margin-bottom: 40px;\n    font-size: 22px;\n  }\n"])));
exports.RelativeBox = (0, styled_components_1.default)(reflexbox_1.Box)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
function FadeInSection(props) {
    var controls = (0, framer_motion_1.useAnimation)();
    var _a = (0, react_intersection_observer_1.useInView)(), ref = _a[0], inView = _a[1];
    (0, react_1.useEffect)(function () {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, __assign({ ref: ref, animate: controls, initial: 'hidden', style: {
            // display: 'inline-block',
            width: '100%'
        }, transition: {
            duration: 0.5,
            when: 'beforeChildren',
            // loop: Infinity,
            ease: 'circOut'
        }, variants: {
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -30 }
        } }, { children: props.children }), void 0));
}
exports.FadeInSection = FadeInSection;
exports.BlurBall = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: relative;\n  right: 10px;\n  /* opacity: ; */\n  bottom: 30px;\n  top: 10px;\n  z-index: 10;\n\n  &::before {\n    filter: blur(100px);\n    position: absolute;\n    width: 240px;\n    height: 240px;\n    background: ", ";\n  }\n"], ["\n  position: relative;\n  right: 10px;\n  /* opacity: ; */\n  bottom: 30px;\n  top: 10px;\n  z-index: 10;\n\n  &::before {\n    filter: blur(100px);\n    position: absolute;\n    width: 240px;\n    height: 240px;\n    background: ", ";\n  }\n"])), function (props) {
    return ({
        yellow: 'gold',
        pink: '#F16994',
        green: '#F19469',
        blue: 'cornflowerblue'
    }[props.color] ||
        props.color ||
        '#F16994');
});
function LogoNotification(props) {
    var _a = (0, react_1.useState)(true), visible = _a[0], setVisible = _a[1];
    var keyKey = "seen-logo-notification-" + props.name;
    (0, react_1.useEffect)(function () {
        if (!localStorage) {
            return;
        }
        var value = localStorage.getItem(keyKey);
        // Unless over a day ago.
        if (value && new Date(parseInt(value) + 1 * 3600 * 1000) < new Date()) {
            setVisible(false);
        }
    }, [keyKey]);
    function onClick() {
        if (props.link) {
            window.open(props.link);
        }
        // Hide item.
        setVisible(false);
        localStorage.setItem(keyKey, '' + Date.now());
    }
    if (props.dismissable && !visible) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.LogoNotificationContainer, __assign({ onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(theme_ui_1.Text, __assign({ variant: 'Smaller' }, { children: props.children }), void 0) }), void 0));
}
exports.LogoNotification = LogoNotification;
exports.LogoNotificationContainer = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: 12px;\n  padding: 0 1em;\n  border-radius: 5px;\n  margin-top: -5px;\n  line-height: 3;\n  background: #f8f8f8;\n  /* background: ", "; */\n  /* font-weight: 500; */\n  /* color: black; */\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-block;\n"], ["\n  font-size: 12px;\n  padding: 0 1em;\n  border-radius: 5px;\n  margin-top: -5px;\n  line-height: 3;\n  background: #f8f8f8;\n  /* background: ", "; */\n  /* font-weight: 500; */\n  /* color: black; */\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-block;\n"])), function (props) { var _a; return (_a = props.theme.colorForeground) !== null && _a !== void 0 ? _a : '#f8f8f8'; });
function SmallSquiglyDivider() {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { marginTop: 20 } }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: '74', height: '14', viewBox: '0 0 74 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M31.7952 7.98604L31.2042 8.79269L31.2042 8.79269L31.7952 7.98604ZM32.3862 7.17938C36.1709 9.95234 38.7489 10.95 40.9 11.0454C43.0548 11.141 44.9539 10.346 47.4769 9.07974C49.9702 7.82839 52.9885 6.16568 57.1784 4.83425C61.3793 3.49932 66.7395 2.49992 74 2.5L74 4.5C66.9322 4.49993 61.7773 5.4714 57.7841 6.74032C53.78 8.01273 50.9252 9.58685 48.374 10.8672C45.8525 12.1327 43.5359 13.1644 40.8114 13.0435C38.0832 12.9224 35.1183 11.6605 31.2042 8.79269L32.3862 7.17938ZM0.321146 7.25152C4.1973 3.66792 8.25094 0.649207 13.403 0.0919782C18.5691 -0.466772 24.5933 1.46964 32.3862 7.17939L31.2042 8.79269C23.5995 3.22086 18.0754 1.59829 13.6181 2.08038C9.14665 2.56399 5.50149 5.18594 1.67885 8.72007L0.321146 7.25152Z', fill: 'black' }, void 0) }), void 0) }), void 0));
}
exports.SmallSquiglyDivider = SmallSquiglyDivider;
function SquiglyDivider() {
    return ((0, jsx_runtime_1.jsx)(reflexbox_1.Flex, __assign({ marginTop: 40, width: 1, marginBottom: 0 }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: '404', height: '13', viewBox: '0 0 404 13', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', style: { margin: 'auto' } }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M182.569 3.02547L182.451 4.01841L182.451 4.01841L182.569 3.02547ZM96.5 2.64275L96.5394 1.64352L96.5 2.64275ZM249 10.5247L249.074 11.5219L249 10.5247ZM299.5 1.03528L299.55 2.03404L299.5 1.03528ZM362 10.5818L362.015 11.5817L362 10.5818ZM45 11.9249L44.928 12.9223L45 11.9249ZM137.5 11.4005L137.523 12.4002L137.5 11.4005ZM182.688 2.03252C200.763 4.19074 211.843 6.48864 221.116 8.02638C230.373 9.56145 237.875 10.3489 248.926 9.52743L249.074 11.5219C237.816 12.3588 230.147 11.5512 220.789 9.99943C211.447 8.45032 200.466 6.16946 182.451 4.01841L182.688 2.03252ZM248.926 9.52743C256.577 8.95874 262.248 6.9697 269.575 4.89562C276.894 2.8237 285.706 0.723273 299.45 0.0365307L299.55 2.03404C285.994 2.71137 277.335 4.77738 270.12 6.82001C262.911 8.86047 256.982 10.9341 249.074 11.5219L248.926 9.52743ZM299.45 0.0365307C303.175 -0.14958 307.667 0.393242 312.585 1.28175C317.511 2.1716 322.935 3.42231 328.526 4.67726C339.75 7.19691 351.652 9.73293 361.985 9.58189L362.015 11.5817C351.404 11.7368 339.27 9.13906 328.088 6.62869C322.475 5.36863 317.103 4.13026 312.23 3.24989C307.349 2.36819 303.04 1.85967 299.55 2.03404L299.45 0.0365307ZM361.985 9.58189C366.819 9.51124 374.358 8.60533 382.217 7.70478C390.029 6.80968 398.142 5.92214 404 5.92216L404 7.92216C398.28 7.92215 390.29 8.79285 382.445 9.69178C374.647 10.5853 366.975 11.5092 362.015 11.5817L361.985 9.58189ZM0.851016 6.33213C8.06723 5.2449 15.2488 6.13663 22.5292 7.41367C29.8515 8.69805 37.2341 10.3617 45.072 10.9275L44.928 12.9223C36.9551 12.3468 29.385 10.6468 22.1837 9.38359C14.9404 8.11308 8.02738 7.27347 1.14898 8.30981L0.851016 6.33213ZM45.072 10.9275C52.3996 11.4564 60.1434 9.01614 68.7277 6.44323C77.2405 3.89174 86.4877 1.24754 96.5394 1.64352L96.4606 3.64197C86.7827 3.26072 77.8311 5.80263 69.3019 8.35903C60.8441 10.894 52.7027 13.4835 44.928 12.9223L45.072 10.9275ZM96.5394 1.64352C99.0415 1.74209 101.878 2.38804 104.922 3.26103C107.961 4.13237 111.319 5.26482 114.805 6.34879C121.833 8.53425 129.573 10.5855 137.477 10.4007L137.523 12.4002C129.272 12.593 121.267 10.4527 114.211 8.25858C110.655 7.15276 107.387 6.04839 104.371 5.18355C101.36 4.32035 98.7135 3.73072 96.4606 3.64197L96.5394 1.64352ZM137.477 10.4007C145.217 10.2199 153.173 7.79487 160.921 5.54595C168.58 3.32268 176.103 1.24628 182.688 2.03252L182.451 4.01841C176.345 3.28938 169.232 5.2159 161.478 7.46666C153.813 9.69177 145.58 12.2119 137.523 12.4002L137.477 10.4007Z', fill: 'black' }, void 0) }), void 0) }), void 0));
}
exports.SquiglyDivider = SquiglyDivider;
function ArrowSvgRight0() {
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: '217', height: '122', viewBox: '0 0 217 122', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M38.499 57.5L37.911 58.3089L38.499 57.5ZM157.999 53L157.039 52.7185L157.999 53ZM216.293 113.608C216.629 113.169 216.545 112.542 216.107 112.206L208.96 106.735C208.522 106.4 207.894 106.483 207.559 106.921C207.223 107.36 207.306 107.988 207.745 108.323L214.097 113.186L209.234 119.539C208.899 119.977 208.982 120.605 209.42 120.94C209.859 121.276 210.487 121.193 210.822 120.754L216.293 113.608ZM1 0.5C0.0670258 0.859943 0.0670414 0.859984 0.0670599 0.860032C0.06707 0.860058 0.0670915 0.860114 0.0671118 0.860166C0.0671523 0.860271 0.0672046 0.860406 0.0672687 0.860572C0.0673969 0.860905 0.0675723 0.861359 0.0677949 0.861935C0.0682401 0.863087 0.068874 0.864726 0.0696962 0.86685C0.0713405 0.871098 0.0737379 0.877284 0.076885 0.885386C0.0831791 0.901591 0.0924722 0.925462 0.104737 0.956823C0.129267 1.01954 0.165685 1.11223 0.213776 1.23349C0.309956 1.47599 0.452834 1.83277 0.640685 2.29264C1.01637 3.21235 1.57202 4.54457 2.29383 6.19971L4.12709 5.40022C3.41209 3.76071 2.86251 2.44295 2.49217 1.53633C2.30701 1.08304 2.16667 0.732584 2.07289 0.496133C2.026 0.377909 1.99075 0.288192 1.96736 0.228379C1.95567 0.198472 1.94693 0.176042 1.94119 0.161264C1.93832 0.153874 1.9362 0.148398 1.93483 0.144856C1.93414 0.143085 1.93365 0.141798 1.93334 0.140997C1.93318 0.140597 1.93308 0.140318 1.93301 0.140161C1.93298 0.140083 1.93297 0.140035 1.93296 0.140017C1.93296 0.140009 1.93296 0.140019 1.93296 0.140014C1.93296 0.140032 1.93297 0.140057 1 0.5ZM7.1765 16.6569C8.75619 19.8301 10.5718 23.2916 12.5944 26.853L14.3335 25.8653C12.3316 22.3404 10.533 18.9115 8.96692 15.7656L7.1765 16.6569ZM18.6321 36.7169C20.7668 39.9383 23.05 43.1057 25.4612 46.081L27.015 44.8218C24.6512 41.9048 22.4055 38.7905 20.2993 35.6121L18.6321 36.7169ZM33.388 54.5972C34.861 55.943 36.3698 57.1885 37.911 58.3089L39.087 56.6911C37.6133 55.6199 36.1621 54.4227 34.737 53.1207L33.388 54.5972ZM37.911 58.3089C39.2314 59.2687 40.5888 60.2095 41.9795 61.1298L43.0832 59.4619C41.7161 58.5573 40.3829 57.6331 39.087 56.6911L37.911 58.3089ZM50.4464 66.2543C53.3007 67.8343 56.2503 69.3294 59.2704 70.7282L60.111 68.9134C57.1332 67.5342 54.2264 66.0607 51.415 64.5045L50.4464 66.2543ZM68.3843 74.573C71.4656 75.75 74.5924 76.8234 77.7417 77.7821L78.3241 75.8688C75.2198 74.9238 72.1367 73.8654 69.098 72.7047L68.3843 74.573ZM87.3066 80.3198C90.561 81.0552 93.8153 81.6582 97.0443 82.1168L97.3255 80.1366C94.1528 79.6861 90.9517 79.093 87.7474 78.369L87.3066 80.3198ZM106.91 83.0603C110.288 83.2192 113.609 83.1975 116.842 82.9797L116.707 80.9842C113.557 81.1965 110.312 81.2181 107.004 81.0625L106.91 83.0603ZM126.714 81.6224C130.053 80.9038 133.247 79.9229 136.249 78.6569L135.472 76.814C132.597 78.0266 129.524 78.972 126.293 79.6672L126.714 81.6224ZM144.992 73.7215C147.681 71.733 150.102 69.4039 152.202 66.7111L150.625 65.4813C148.641 68.0256 146.352 70.2286 143.803 72.1134L144.992 73.7215ZM157.271 58.0272C157.909 56.5196 158.473 54.9383 158.959 53.2815L157.039 52.7185C156.574 54.3041 156.036 55.8132 155.429 57.2482L157.271 58.0272ZM158.959 53.2815C159.353 51.9377 159.76 50.4685 160.141 48.9077L158.198 48.4333C157.826 49.957 157.428 51.3957 157.039 52.7185L158.959 53.2815ZM161.717 39.9258C162.007 36.9177 162.037 33.7988 161.615 30.7325L159.634 31.005C160.029 33.8816 160.006 36.8397 159.726 39.7335L161.717 39.9258ZM158.819 21.8763C157.407 19.2606 155.442 16.847 152.785 14.7693L151.553 16.3448C153.988 18.2488 155.775 20.4477 157.059 22.8262L158.819 21.8763ZM144.647 10.3615C143.277 9.86004 141.809 9.41419 140.237 9.02879L139.761 10.9712C141.265 11.3403 142.663 11.7652 143.96 12.2397L144.647 10.3615ZM140.237 9.02879C138.547 8.61418 136.845 8.31188 135.142 8.11742L134.915 10.1045C136.535 10.2895 138.154 10.577 139.761 10.9712L140.237 9.02879ZM124.815 8.23374C121.367 8.70327 118.008 9.59788 114.832 10.8787L115.58 12.7335C118.602 11.5147 121.801 10.6627 125.085 10.2155L124.815 8.23374ZM105.82 15.9402C103.045 18.0204 100.563 20.468 98.4809 23.2422L100.08 24.4428C102.044 21.8272 104.389 19.5126 107.02 17.5406L105.82 15.9402ZM93.5818 32.3809C92.469 35.5443 91.8015 38.9513 91.6626 42.5646L93.6611 42.6414C93.7923 39.2276 94.4224 36.0184 95.4685 33.0446L93.5818 32.3809ZM92.6444 52.8463C93.0095 54.4778 93.4772 56.1376 94.0527 57.8231L95.9454 57.1769C95.3926 55.5578 94.9449 53.9679 94.5961 52.4095L92.6444 52.8463ZM94.0527 57.8231C94.6027 59.4336 95.2367 61.0417 95.9528 62.6425L97.7785 61.8259C97.0866 60.279 96.475 58.7277 95.9454 57.1769L94.0527 57.8231ZM100.94 71.7074C102.776 74.5061 104.866 77.2538 107.195 79.9231L108.702 78.608C106.43 76.0045 104.396 73.3293 102.612 70.6101L100.94 71.7074ZM114.444 87.2665C116.934 89.5077 119.61 91.6657 122.463 93.7207L123.632 92.0979C120.836 90.0843 118.217 87.9717 115.782 85.7799L114.444 87.2665ZM131.116 99.311C134.021 100.99 137.066 102.568 140.247 104.03L141.082 102.212C137.957 100.776 134.967 99.227 132.117 97.5795L131.116 99.311ZM149.77 107.903C152.934 109.032 156.208 110.05 159.587 110.945L160.1 109.012C156.774 108.131 153.553 107.129 150.442 106.019L149.77 107.903ZM169.616 113.178C172.921 113.778 176.311 114.263 179.782 114.626L179.99 112.636C176.568 112.279 173.228 111.801 169.973 111.21L169.616 113.178ZM190.023 115.32C193.378 115.428 196.8 115.422 200.286 115.296L200.213 113.297C196.773 113.422 193.396 113.427 190.087 113.321L190.023 115.32ZM210.528 114.589C212.215 114.418 213.917 114.219 215.631 113.991L215.367 112.009C213.674 112.234 211.993 112.43 210.326 112.599L210.528 114.589Z', fill: 'black' }, void 0) }), void 0));
}
exports.ArrowSvgRight0 = ArrowSvgRight0;
function ArrowSvgBottom() {
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: '15', height: '56', viewBox: '0 0 15 56', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M7.59613 24.4217L6.84656 23.7598L6.84656 23.7598L7.59613 24.4217ZM8.30323 55.7071C7.9127 56.0976 7.27953 56.0976 6.88901 55.7071L0.525134 49.3431C0.134615 48.9525 0.134623 48.3194 0.525152 47.9288C0.915682 47.5383 1.54885 47.5383 1.93937 47.9289L7.59615 53.5858L13.2531 47.929C13.6436 47.5385 14.2768 47.5385 14.6673 47.929C15.0578 48.3196 15.0578 48.9527 14.6673 49.3432L8.30323 55.7071ZM8.26426 0.255759C9.38933 1.26544 10.4533 2.29134 11.387 3.35829L9.88186 4.67534C9.02196 3.69266 8.02301 2.72656 6.92844 1.74424L8.26426 0.255759ZM14.3031 7.97977C15.3167 10.6489 15.2906 13.6088 13.7872 17.0583L11.9537 16.2593C13.273 13.2323 13.2407 10.8157 12.4334 8.68982L14.3031 7.97977ZM11.0943 21.666C10.3104 22.7554 9.39738 23.8927 8.3457 25.0836L6.84656 23.7598C7.86075 22.6113 8.73113 21.5259 9.47091 20.4979L11.0943 21.666ZM8.3457 25.0836C6.9724 26.6388 5.99374 27.9046 5.3155 28.9829L3.62256 27.918C4.38063 26.7128 5.43629 25.3568 6.84656 23.7598L8.3457 25.0836ZM4.15959 34.0059C4.40717 35.0764 4.89799 36.1958 5.52803 37.7762C6.14462 39.3228 6.84468 41.2014 7.41926 43.6449L5.47236 44.1027C4.92996 41.796 4.26969 40.0204 3.67023 38.5168C3.08423 37.0469 2.50329 35.7202 2.21104 34.4566L4.15959 34.0059ZM8.38265 49.813C8.51855 51.3773 8.59615 53.098 8.59613 55L6.59613 55C6.59615 53.1525 6.52078 51.4897 6.39015 49.9861L8.38265 49.813Z', fill: 'black' }, void 0) }), void 0));
}
exports.ArrowSvgBottom = ArrowSvgBottom;
exports.RainbowSpan = styled_components_1.default.span(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #f3ec78, #af4261);\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  display: inline;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  animation: gradient 8s ease infinite;\n  background-size: 400% 400%;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n"], ["\n  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #f3ec78, #af4261);\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  display: inline;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  animation: gradient 8s ease infinite;\n  background-size: 400% 400%;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n"])));
exports.BenefitNumber = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  border-radius: 50px;\n  height: 2.4em;\n  width: 2.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: 1em;\n"], ["\n  border-radius: 50px;\n  height: 2.4em;\n  width: 2.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: 1em;\n"])), function (props) { var _a; return (_a = props.theme.colorBackground) !== null && _a !== void 0 ? _a : 'rgba(0, 0, 0, 0.1)'; });
exports.ParagraphStyle2 = styled_components_1.default.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  ", "\n\n  h1 {\n    /* color: inherit; */\n    line-height: 1.5;\n    /* letter-spacing: .5px; */\n    font-weight: 500;\n    font-size: 3em;\n    line-height: 1.3;\n  }\n\n  h2 {\n    /* color: inherit; */\n    font-size: 1.5em;\n    line-height: 1.4;\n    /* margin-bottom: 10px; */\n    max-width: 700px;\n  }\n\n  h3 {\n    /* color: inherit; */\n    font-weight: 500;\n    line-height: 1.4;\n    font-size: 22px;\n    opacity: 0.4;\n    /* color: #bf0023; */\n  }\n\n  p {\n    margin-bottom: 1em;\n    line-height: 1.7;\n    font-size: 1.6em;\n    font-weight: 400;\n    letter-spacing: 0.3px;\n    font-weight: 500;\n    color: #888;\n\n    strong {\n      opacity: 1;\n      font-weight: 600;\n      color: black;\n    }\n\n    a {\n      /* border-bottom: 2px solid #888; */\n    }\n  }\n"], ["\n  ", "\n\n  h1 {\n    /* color: inherit; */\n    line-height: 1.5;\n    /* letter-spacing: .5px; */\n    font-weight: 500;\n    font-size: 3em;\n    line-height: 1.3;\n  }\n\n  h2 {\n    /* color: inherit; */\n    font-size: 1.5em;\n    line-height: 1.4;\n    /* margin-bottom: 10px; */\n    max-width: 700px;\n  }\n\n  h3 {\n    /* color: inherit; */\n    font-weight: 500;\n    line-height: 1.4;\n    font-size: 22px;\n    opacity: 0.4;\n    /* color: #bf0023; */\n  }\n\n  p {\n    margin-bottom: 1em;\n    line-height: 1.7;\n    font-size: 1.6em;\n    font-weight: 400;\n    letter-spacing: 0.3px;\n    font-weight: 500;\n    color: #888;\n\n    strong {\n      opacity: 1;\n      font-weight: 600;\n      color: black;\n    }\n\n    a {\n      /* border-bottom: 2px solid #888; */\n    }\n  }\n"])), function (props) {
    return props.center && (0, styled_components_1.css)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      text-align: center;\n      width: 100%;\n    "], ["\n      text-align: center;\n      width: 100%;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
