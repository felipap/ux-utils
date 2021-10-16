// https://theme-ui.com/demo
// https://github.com/tabetalt/kit
// https://www.oh-my-theme.com
// https://evergreen.segment.com/components
// https://components.ai/gradient/9yqURS6GKyW5JKJlXlfS?tab=editor
// https://theme.hackclub.com
// https://primer.style/components/theme-reference

import { darken, mix, transparentize } from '@theme-ui/color'
import { Theme } from 'theme-ui'

export const watchOSColors = {
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
}

const hackClubThings = {
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
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  layout: hackClubThings.layout as any,
  initialColorModeName: 'light',
  config: {
    useLocalStorage: false,
    useColorSchemeMediaQuery: false
  },
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
    3: '15px',
    4: '24px',
    5: '32px',
    6: '48px'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: {
    layout: ['100%', '1040px'],
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
  colors: {
    ...hackClubThings.colors,
    ...watchOSColors,
    navbar: '#ffc107',
    // navbar: darken('primary', 0.3) as any,
    navtext: 'black',
    primary: 'blue',
    background: '#fafafa',
    foreground: 'white',
    text: '#000',
    secondary: '#119',
    muted: '#f6f6f6',
    highlight: '#efeffe',
    gray: '#777',
    accent: '#609',
    link: '#000', // '#3d8bd4',
    pageHeaderParagraph: 'rgba(0,0,0,.4)',
    modes: {
      dark: {
        text: '#fff',
        background: '#141719',
        link: 'white',
        foreground: '#000',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        accent: '#c0f'
      }
    }
  },
  forms: {
    switch: {
      span: {
        fontWeight: 'bold'
      }
    },
    input: {
      bg: 'foreground',
      text: 'background',
      borderColor: transparentize('text', 0.9),
      '&:focused': {
        borderColor: transparentize('text', 0.5)
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
      maxWidth: '800px',
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
      textShadow: '0 0 3px #00000011'
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
        fontWeight: 600
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
      maxWidth: '850px'
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
      fontFamily: 'heading'
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
      color: transparentize('text', 0.5),
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
      bg: transparentize('primary', 0.9),
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
      borderColor: transparentize('text', 0.9),
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
      bg: 'text',
      fontWeight: '600',
      borderRadius: '100px',
      '&:hover': {
        color: 'background' // Required when rendering Links as primary buttons.
      }
    },
    secondary: {
      variant: 'buttons.primary',
      color: darken('primary', 0.3),
      // bg: transparentize('primary', 0.9),
      bg: 'foreground',
      '&:hover': {
        color: 'primary' // Required when rendering Links as primary buttons.
      }
    },
    plain: {
      variant: 'buttons.base',
      borderColor: transparentize('text', 0.8),
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
      color: '#000000ee', // transparentize('', 0.3),
      bg: transparentize('text', 0.95),
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
      border: t => `1px solid ${transparentize('text', 0.99)(t)}`,
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
      bg: t => mix('beryl', 'foreground', 0.07)
    },
    warning: {
      variant: 'cards.primary',
      color: '#F7931A',
      bg: t => mix('#F7931A', 'foreground', 0.07)
    },
    danger: {
      variant: 'cards.primary',
      color: 'red',
      bg: t => mix('#FFE0DA', 'foreground', 0.3),
      a: {
        color: 'text'
      }
    }
  },
  styles: {
    root: {
      color: 'text',
      minHeight: '100vh',
      textRendering: 'optimizeLegibility' as any,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      overflowX: 'hidden',
      maxWidth: '100%',
      body: {
        overflowX: 'hidden',
        maxWidth: '100%'
      },
      a: {
        variant: 'styles.a'
      }
    },
    hr: {
      color: transparentize('text', 0.95),
      my: 3
    },
    a: {
      color: 'link',
      textDecoration: 'none',
      transition: '200ms all',
      '&:hover': {
        color: 'link',
        opacity: 0.9
      }
    },
    img: {
      maxWidth: '100%'
    },
    nav: {}
  }
} as Theme
