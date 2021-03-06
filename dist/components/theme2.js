"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaddedContainer = exports.Code = exports.Icons = exports.SectionContainer = exports.Stats = exports.Breadcrumbs = exports.Smaller = exports.Banner = exports.ComplexAlert = exports.VStack = exports.HStack = exports.Divider = exports.ColoredBadge = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// https://theme-ui.com/demo
// https://github.com/tabetalt/kit
// https://www.oh-my-theme.com
// https://evergreen.segment.com/components
// https://components.ai/gradient/9yqURS6GKyW5JKJlXlfS?tab=editor
// https://theme.hackclub.com
// https://primer.style/components/theme-reference
var color_1 = require("@theme-ui/color");
var theme_ui_1 = require("theme-ui");
var watchOSColors = {
    'antique-white': '#CDA986',
    'soft-white': '#D8C9AF',
    pebble: '#9F8D7E',
    stone: '#A28872',
    walnut: '#A17455',
    camel: '#A97D4F',
    'coastal-gray': '#715D50',
    gold: '#B08053',
    'yellow-gold': '#CC996D',
    'storm-gray': '#578887',
    cactus: '#5B7971',
    'northern-blue': '#638A8D',
    azure: '#788991',
    'mist-blue': '#A7AB99',
    'cyprus-green': '#525D49',
    // 'pine-green': '#4E6C54',
    'pine-green': '#288C00',
    khaki: '#7A6E49',
    'dark-olive': '#7C7A66',
    'ocean-blue': '#6273BD',
    'delft-blue': '#4662B2',
    indigo: '#474E95',
    purple: '#8962F8',
    lavender: '#A58998',
    cocoa: '#8B7D7D',
    'lavender-gray': '#757397',
    'ultra-violet': '#5F41B2',
    lilac: '#A990DD',
    'pacific-green': '#0F6D8E',
    'blue-cobalt': '#3A6B8E',
    'dark-teal': '#2C6184',
    'denim-blue': '#4B709A',
    'midnight-blue': '#383B65',
    'alaskan-blue': '#525C73',
    'linen-blue': '#455785',
    'deep-navy': '#3A4565',
    'blue-horizon': '#1E538F',
    'light-blue': '#5EBAD9',
    'surf-blue': '#1871AC',
    blue: '#1EA5FC',
    cerulian: '#87B9E7',
    cream: '#FFE0AB',
    'sea-foam': '#CFF1D6',
    beryl: '#D0F2B1',
    turquoise: '#91CEC2',
    mint: '#A2EC8E',
    pollen: '#E8C511',
    pollen2: '#FECB4D',
    'canary-yellow': '#FFDA3A',
    'flash-light': '#FAED0B',
    flash: '#DFF81E',
    green: '#80E220',
    spearmint: '#77EA7E',
    'lemon-cream': '#FFEB6D',
    'mellow-yellow': '#F7F6AF',
    'pink-sand': '#FEB69C',
    'vintage-rose': '#F29C98',
    grapefruit: '#FDA27E',
    flamingo: '#CA6F59',
    'rose-gold': '#E99475',
    clementine: '#FD513B',
    apricot: '#FC5C42',
    peach: '#E0694E',
    papaya: '#FD7036',
    kumquat: '#FD7441',
    orange: '#FC4E12',
    'light-orange': '#FD820B',
    pink: '#FD4154',
    'electric-pink': '#FC3644',
    hibiscus: '#FB0049',
    pomagranate: '#D80E4F',
    plum: '#81323D',
    'red-rose': '#AB1438',
    camellia: '#BF3138',
    'dragon-fruit': '#F12E6D',
    'neon-pink': '#FB212F',
    'pink-citrus': '#EA383A',
    red: '#DF1125'
};
var hackClubThings = {
    colors: {
        darker: '#121217',
        dark: '#17171d',
        darkless: '#252429',
        black: '#1f2d3d',
        steel: '#273444',
        slate: '#3c4858',
        muted: '#8492a6',
        smoke: '#e0e6ed',
        snow: '#f9fafc',
        white: '#ffffff',
        red: '#ec3750',
        orange: '#ff8c37',
        yellow: '#f1c40f',
        green: '#33d6a6',
        cyan: '#5bc0de',
        blue: '#338eda',
        purple: '#a633d6',
        twitter: '#1da1f2',
        facebook: '#3b5998',
        instagram: '#e1306c',
        text: '#1f2d3d',
        background: '#ffffff',
        elevated: '#ffffff',
        sheet: '#f9fafc',
        sunken: '#e0e6ed',
        border: '#e0e6ed',
        placeholder: '#8492a6',
        secondary: '#3c4858',
        primary: '#ec3750',
        accent: '#338eda'
    },
    layout: {
        container: {
            maxWidth: ['layout', null, 'layoutPlus'],
            width: '100%',
            mx: 'auto'
            // px: 3,
        },
        wide: {
            variant: 'layout.container',
            maxWidth: ['layout', null, 'wide']
        },
        copy: {
            variant: 'layout.container',
            maxWidth: ['copy', null, 'copyPlus']
        },
        narrow: {
            variant: 'layout.container',
            maxWidth: ['narrow', null, 'narrowPlus']
        },
        header: {
            maxHeight: 80,
            bg: 'navbar',
            color: 'white',
            position: 'fixed',
            width: '100%'
        }
    }
};
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
var theme = {
    layout: hackClubThings.layout,
    initialColorModeName: 'light',
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Sefgoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Poppins, system-ui, -apple-system, Roboto, sans-serif',
        monospace: 'Menlo, monospace'
    },
    shadows: {
        voogOne: '0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03)',
        voogTwo: '0px 1px 5px rgba(0, 0, 0, 0.05)',
        line: '0 0 0 1px rgba(0, 0, 0, .03)',
        lineActive: '0 0 0 1px rgba(0, 0, 0, 1)'
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    sizes: {
        layout: '1040px',
        navbarHeight: '60px'
        // widePlus: 2048,
        // wide: 1536,
        // layoutPlus: 1200,
        // layout: 1024,
        // copyUltra: 980,
        // copyPlus: 768,
        // copy: 680,
        // narrowPlus: 600,
        // narrow: 512,
    },
    colors: __assign(__assign(__assign({}, hackClubThings.colors), watchOSColors), { navbar: '#ffc107', 
        // navbar: darken('primary', 0.3) as any,
        navtext: 'black', primary: 'blue', background: '#fafafa', foreground: 'white', text: '#000', secondary: '#119', muted: '#f6f6f6', highlight: '#efeffe', gray: '#777', accent: '#609', link: '#000', pageHeaderParagraph: 'rgba(0,0,0,.4)', modes: {
            dark: {
                text: '#fff',
                background: '#141719',
                foreground: '#000',
                primary: '#3cf',
                secondary: '#e0f',
                muted: '#191919',
                highlight: '#29112c',
                gray: '#999',
                accent: '#c0f'
            }
        } }),
    forms: {
        switch: {
            span: {
                fontWeight: 'bold'
            }
        },
        input: {
            bg: 'foreground',
            text: 'background',
            borderColor: (0, color_1.transparentize)('text', 0.9),
            '&:focused': {
                borderColor: (0, color_1.transparentize)('text', 0.5)
            }
        }
    },
    text: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2px'
        },
        heading: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            // lineHeight: '1.4',
            marginBottom: '0.5em',
            fontWeight: 500,
            mt: 0,
            mb: '.8em',
            '&h1': {
                color: 'red'
            }
        },
        link: {
            color: 'link'
        },
        TextDefault: {
            letterSpacing: '0.2px',
            marginBottom: 4,
            color: 'inherit',
            fontSize: '1em',
            // textAlign: 'justify',
            lineHeight: 1.6,
            // textAlignLast: 'start',
            fontFamily: 'body',
            textJustify: 'auto',
            // README Make sure to use VStack's gap prop to set the spacing between the header
            // items.
            mt: 0,
            mb: 0,
            textShadow: '0 0 3px #00000011',
            maxWidth: '800px'
        },
        paragraph: {
            variant: 'text.TextDefault',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.6,
            color: 'text',
            // color: transparentize('text', 0.5),
            strong: {
                color: 'text',
                fontWeight: 500
            }
        },
        HeadingDefault: {
            variant: 'text.TextDefault',
            // README Make sure to use VStack's gap prop to set the spacing between the header
            // items.
            mt: 0,
            color: 'inherit',
            fontFamily: 'heading',
            mb: 0,
            textShadow: '0 0 3px #00000011',
            maxWidth: '800px'
        },
        navLink: {
            fontSize: 16,
            fontWeight: 500,
            // letterSpacing: '0.2px',
            transition: 'all 200ms',
            lineHeight: 2.3,
            borderRadius: '5px',
            color: 'navtext',
            px: '8px',
            '&:hover, &.active, &:focus': {
                color: 'navtext'
                // bg: transparentize('white', 0.85),
            }
            // opacity: '1 !important', // Prevent opacity change on hover for link.
        },
        Title: {
            variant: 'text.HeadingDefault',
            fontWeight: 500,
            fontSize: ['45px', '56px'],
            lineHeight: 1.3,
            letterSpacing: '-1px',
            fontFamily: 'Poppins, sans-serif'
        },
        PreTitle: {
            variant: 'text.TextDefault',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: 12,
            opacity: 0.3,
            lineHeight: 1.1
        },
        H1: {
            variant: 'text.HeadingDefault',
            fontWeight: 500,
            fontSize: '29px',
            letterSpacing: '-0.02em',
            lineHeight: 1.4
        },
        H1Paragraph: {
            variant: 'text.paragraph',
            fontWeight: 500,
            color: (0, color_1.transparentize)('text', 0.5),
            fontSize: 16,
            lineHeight: 1.7
        },
        CardTitle: {
            variant: 'text.paragraph',
            color: 'inherit',
            opacity: 1,
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 1.7
        },
        H2: {
            variant: 'text.HeadingDefault',
            fontWeight: 500,
            fontSize: '36px',
            letterSpacing: '0.3px',
            lineHeight: 1.4
        },
        H3: {
            variant: 'text.HeadingDefault',
            letterSpacing: '0.3px',
            lineHeight: 1.5,
            fontSize: '26px',
            fontWeight: 500
        },
        H4: {
            variant: 'text.HeadingDefault',
            fontFamily: 'inherit',
            letterSpacing: 0,
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: 1.4
        },
        SectionHeader: {
            variant: 'text.HeadingDefault',
            fontWeight: 500,
            fontSize: '23px',
            letterSpacing: '.1em',
            textTransform: 'uppercase'
        },
        Smaller: {
            variant: 'text.TextDefault',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.6
        },
        Bigger: {
            variant: 'text.TextDefault',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 23,
            lineHeight: 1.7
            // fontWeight: 500,
            // color: transparentize('text', 0.3),
            // lineHeight: 1.7
        }
    },
    links: {
        nav: {
            variant: 'text.navLink'
        }
    },
    alerts: {
        base: {
            borderRadius: 'default',
            bg: (0, color_1.transparentize)('primary', 0.9),
            color: 'primary',
            fontWeight: 500,
            border: '1px solid transparent'
        },
        primary: {
            variant: 'alerts.base'
        },
        secondary: {
            variant: 'alerts.base'
        },
        plain: {
            variant: 'alerts.base',
            borderColor: (0, color_1.transparentize)('text', 0.9),
            color: 'text',
            fontWeight: 400,
            bg: 'background',
            close: {
                opacity: 0.3
            }
        }
    },
    buttons: {
        base: {
            display: 'inline-block',
            fontFamily: 'heading',
            letterSpacing: '.5px',
            cursor: 'pointer',
            fontSize: '.95em',
            fontWeight: 500,
            paddingTop: 0,
            paddingBottom: 0,
            borderRadius: '4px',
            border: '1px solid transparent',
            px: '1em',
            // letterSpacing: '.05em',
            lineHeight: 2.5,
            transition: '200ms all',
            boxShadow: 'voogTwo',
            '&:focus': {},
            '&:hover': {
                opacity: 0.9
            },
            '&:active': {
                boxShadow: 'none'
            }
        },
        primary: {
            variant: 'buttons.base',
            color: 'background',
            // bg: 'primary',
            bg: 'text',
            fontWeight: '600',
            borderRadius: '100px',
            '&:hover': {
                color: 'background' // Required when rendering Links as primary buttons.
            }
        },
        secondary: {
            variant: 'buttons.base',
            color: (0, color_1.darken)('primary', 0.2),
            bg: (0, color_1.transparentize)('primary', 0.8)
        },
        plain: {
            variant: 'buttons.base',
            borderColor: (0, color_1.transparentize)('text', 0.8),
            color: 'text',
            bg: 'background'
        },
        link: {
            variant: 'buttons.base',
            color: 'text',
            boxShadow: 'none',
            padding: 0,
            bg: 'transparent'
        },
        disabled: {
            variant: 'buttons.base',
            color: 'background',
            cursor: 'not-allowed'
        }
    },
    badges: {
        base: {
            fontWeight: 600,
            borderRadius: '100px',
            lineHeight: 2,
            color: '#000000ee',
            bg: (0, color_1.transparentize)('text', 0.95),
            px: '9px',
            fontSize: '11px'
        },
        primary: {
            variant: 'badges.base'
        },
        round: {
            variant: 'badges.base',
            borderRadius: '.5em',
            px: '.5em'
        }
    },
    cards: {
        primary: {
            fontSize: '12px',
            borderRadius: '10px',
            // boxShadow: t => `0 0 10px ${transparentize('text', 0.9)(t)}`,
            h2: {
                fontWeight: 600
            },
            bg: 'foreground',
            border: function (t) { return "1px solid " + (0, color_1.transparentize)('text', 0.99)(t); },
            boxShadow: 'voogTwo',
            padding: '15px 20px',
            '&.small': {
                padding: '15px 20px 15px 15px' // Match the padding-right of the bigger one?
            },
            small: {
                variant: 'text.Smaller',
                fontWeight: 400,
                opacity: 0.5
            }
        },
        success: {
            variant: 'cards.primary',
            color: 'green',
            bg: function (t) { return (0, color_1.mix)('beryl', 'foreground', 0.07); }
        },
        warning: {
            variant: 'cards.primary',
            color: '#F7931A',
            bg: function (t) { return (0, color_1.mix)('#F7931A', 'foreground', 0.07); }
        },
        danger: {
            variant: 'cards.primary',
            color: 'red',
            bg: function (t) { return (0, color_1.mix)('#FFE0DA', 'foreground', 0.3); },
            a: {
                color: 'text'
            }
        }
    },
    styles: {
        root: {
            color: 'text',
            minHeight: '100vh',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            a: {
                variant: 'styles.a'
            }
        },
        hr: {
            color: (0, color_1.transparentize)('text', 0.95),
            my: 3
        },
        a: {
            color: 'link',
            textDecoration: 'none',
            transform: '200ms all ',
            '&:hover': {
                color: 'link',
                opacity: 0.8
            }
        },
        img: {
            maxWidth: '100%'
        },
        nav: {}
    }
};
exports.default = theme;
var ColoredBadge = function (_a) {
    var color = _a.color, sx = _a.sx, children = _a.children, others = __rest(_a, ["color", "sx", "children"]);
    var _b = (0, theme_ui_1.useThemeUI)(), colorMode = _b.colorMode, setColorMode = _b.setColorMode;
    color !== null && color !== void 0 ? color : (color = '#AAA');
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Badge, __assign({ sx: __assign(__assign({}, sx), { color: colorMode === 'dark' ? (0, color_1.saturate)(color, 0.8) : (0, color_1.darken)(color, 0.2), bg: (0, color_1.transparentize)(color, 0.9) }) }, others, { children: children }), void 0));
};
exports.ColoredBadge = ColoredBadge;
function Divider(props) {
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Box, { sx: {
            height: props.big ? [50, 80] : [30, 30]
        } }, void 0));
}
exports.Divider = Divider;
// Record<string, any> & {
//   gap?: number | string
//   children: React.ReactNode
// })
function HStack(_a) {
    var _b = _a.gap, gap = _b === void 0 ? 3 : _b, children = _a.children, others = __rest(_a, ["gap", "children"]);
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({}, others, { sx: __assign({ display: 'flex', gridGap: gap, alignItems: 'center', justifyContent: 'space-between' }, others.sx) }, { children: children }), void 0));
}
exports.HStack = HStack;
function VStack(_a) {
    var _b = _a.gap, gap = _b === void 0 ? 3 : _b, children = _a.children, others = __rest(_a, ["gap", "children"]);
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Flex, __assign({}, others, { sx: __assign({ gridGap: gap, alignItems: 'flex-start', flexDirection: 'column', 
            // Remove the natural margins from the children of VStack (unless they use a div,
            // so as to leave one way to still change the margins)
            '& > :not(div)': {
                marginBottom: 0
            } }, others.sx) }, { children: children }), void 0));
}
exports.VStack = VStack;
function ComplexAlert(_a) {
    var icon = _a.icon, variant = _a.variant, children = _a.children, onAction = _a.onAction, onClose = _a.onClose, sx = _a.sx, others = __rest(_a, ["icon", "variant", "children", "onAction", "onClose", "sx"]);
    var iconComponent;
    if (icon) {
        iconComponent = (0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({ mr: 3 }, { children: icon }), void 0);
    }
    var actionEl;
    if (onClose) {
        actionEl = ((0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({ ml: 'auto', pl: '4', mr: -2, sx: sx }, others, { children: (0, jsx_runtime_1.jsx)(theme_ui_1.Close, { ml: 'auto', onClick: onClose }, void 0) }), void 0));
        // } else if (onAction) {
        //   actionEl = <Link ml="auto" mr={-2} onClick={onClose} />
    }
    return ((0, jsx_runtime_1.jsxs)(theme_ui_1.Alert, __assign({ variant: variant !== null && variant !== void 0 ? variant : 'primary' }, { children: [iconComponent, (0, jsx_runtime_1.jsx)(HStack, { children: children }, void 0), actionEl] }), void 0));
}
exports.ComplexAlert = ComplexAlert;
function Banner(_a) {
    var children = _a.children, variant = _a.variant, right = _a.right, small = _a.small, gap = _a.gap, others = __rest(_a, ["children", "variant", "right", "small", "gap"]);
    if (!right) {
        right = ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(exports.Icons.Info, {}, void 0) }, void 0));
    }
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Card, __assign({ variant: variant !== null && variant !== void 0 ? variant : 'primary', className: small ? 'small' : '' }, others, { sx: __assign({ p: '25px 20px' }, others.sx) }, { children: (0, jsx_runtime_1.jsxs)(HStack, __assign({ sx: { justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(VStack, __assign({ gap: gap || (small ? '5px' : '10px') }, { children: children }), void 0), (0, jsx_runtime_1.jsx)(VStack, __assign({ sx: { flexGrow: 0, minWidth: 'auto' } }, { children: right }), void 0)] }), void 0) }), void 0));
}
exports.Banner = Banner;
function Smaller(_a) {
    var children = _a.children, others = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(theme_ui_1.Text, __assign({ variant: "Smaller" }, others, { children: children }), void 0);
}
exports.Smaller = Smaller;
function Breadcrumbs(_a) {
    var children = _a.children, others = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(HStack, { children: children }, void 0);
}
exports.Breadcrumbs = Breadcrumbs;
function Stats(_a) {
    var children = _a.children, title = _a.title, others = __rest(_a, ["children", "title"]);
    return ((0, jsx_runtime_1.jsxs)(VStack, __assign({ gap: '5px', sx: { alignItems: 'flex-end' } }, { children: [(0, jsx_runtime_1.jsx)(theme_ui_1.Text, __assign({ sx: { variant: 'TextDefault', fontSize: '14px', textAlign: 'right' } }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({ variant: 'text.H2' }, { children: children }), void 0)] }), void 0));
}
exports.Stats = Stats;
function SectionContainer(_a) {
    var children = _a.children, others = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({ mb: 5 }, others, { sx: __assign({ 
            // border: '1px solid black',
            '&:first-of-type': {
                pt: 3
            }, '&:last-child': {
                pb: 3
            } }, others.sx) }, { children: children }), void 0));
}
exports.SectionContainer = SectionContainer;
exports.Icons = {
    Info: function (props) { return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: '23', height: '25', viewBox: '0 0 24 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: '0.2', d: 'M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z', fill: 'black' }, void 0), (0, jsx_runtime_1.jsx)("path", { d: 'M13 12.3571C13 11.8838 12.5523 11.5 12 11.5C11.4477 11.5 11 11.8838 11 12.3571V16.6429C11 17.1162 11.4477 17.5 12 17.5C12.5523 17.5 13 17.1162 13 16.6429V12.3571Z', fill: 'black' }, void 0), (0, jsx_runtime_1.jsx)("path", { d: 'M13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 11.4477 10.5 12 10.5C12.5523 10.5 13 10.0523 13 9.5Z', fill: 'black' }, void 0)] }), void 0)); }
};
function Code(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Box, __assign({ sx: {
            display: 'inline-block',
            borderRadius: '3px',
            bg: '#f5f5f5',
            px: '7px',
            // py: '0px',
            border: '.5px solid rgba(0,0,0,.03)'
        } }, { children: (0, jsx_runtime_1.jsx)(theme_ui_1.Text, __assign({ variant: 'Smaller', sx: { color: watchOSColors.pink } }, { children: children }), void 0) }), void 0));
}
exports.Code = Code;
// export function BetterTooltip(
//   props: {children: React.ReactNode} & TooltipProps
// ) {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//       }}
//     >
//       <Tooltip
//         {...props}
//         content={
//           <Box
//             sx={{
//               bg: 'text',
//               color: 'background',
//               fontSize: '12px',
//               p: '2px 6px',
//               borderRadius: '3px',
//             }}
//           >
//             {props.content}
//           </Box>
//         }
//         statelessProps={{
//           paddingY: 0,
//           paddingX: 0,
//           cursor: 'default',
//           ...props.statelessProps,
//         }}
//       />
//     </Box>
//   )
// }
function PaddedContainer(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Container, __assign({}, rest, { sx: __assign({ px: [20, 0, 0] }, rest.sx) }, { children: children }), void 0));
}
exports.PaddedContainer = PaddedContainer;
