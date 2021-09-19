import Head from 'next/head'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider as ThemeUIThemeProvider } from 'theme-ui'
import theme from '@aww-sites/shared/components/theme'
import { ColorBackground, ColorForeground } from './common'

interface Props {
  children: React.ReactNode
  title?: string
  meta?: any
}

export default function Layout(props: Props) {
  return (
    <ThemeUIThemeProvider theme={theme}>
      <ThemeProvider
        theme={{
          breakpoints: ['40em', '52em', '64em'],
          maxWidth: 1150,
          colorForeground: ColorForeground,
          colorBackground: ColorBackground
        }}
      >
        <Helmet htmlAttributes={{ lang: 'en' }} />
        <Head>
          <title>{props.title ?? 'Awwdience — The future of retargeting'}</title>
          <meta property='og:image' content='https://awwdience.io/logos/favicon.png' />
          <meta
            name='keywords'
            content='shopify plus, shopify flow, awwdience, facebook audience, custom audience, retention ads, shopify integration, shopify retention, ecommerce retention'
          />
          <meta property='og:url' content='https://awwdience.io' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Audiences For Retention Ads' />
          <meta
            property='og:description'
            content='Target ad campaigns at your past customers that retain 3x better than email marketing.'
          />
          <meta
            name='description'
            content='Target ad campaigns at your past customers that retain 3x better than email marketing.'
          />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='icon' type='image/png' href='/awwdience/favicon.png' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          {/* <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <meta
            name='google-site-verification'
            content='9KplHoUsilIKnNVk22gLhOkxlpFvvGExI37oQpt2uiw'
          />
          <script async src={'https://www.googletagmanager.com/gtag/js?id=G-QDD3HZS05J'} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', 'G-QDD3HZS05J');
            `
            }}
          />
        </Head>
        <div>{props.children}</div>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeUIThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  // font-family: 'San Francisco';
  font-family: Inter, -apple-system, system-ui, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  background: ${ColorBackground};
  margin: 0;
  color: black;
  height: auto;
}

h1 {
  /* font-family: Rubik, sans-serif; */
  font-family: Poppins, sans-serif;
  font-weight: 400;
}

a, button {
  /* font-family: Poppins, sans-serif; */
}

img {
  user-select: none;
}
`
