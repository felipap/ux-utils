import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Box, Flex } from 'reflexbox'
import styled, { css } from 'styled-components'
import { Text } from 'theme-ui'

export const LinkFontFamily = 'Poppins, sans-serif'
export const MaxWidth = 1150
// export const ColorBackground = "#fdf8f7"
// export const ColorForeground = "#fff"
export const ColorPink = '#fdf8f7'
export const ColorBackground = '#fff'
export const ColorForeground = '#fafafa'
// export const ColorForeground = '#fdf8f7'
// export const BORDER_COLOR = 'rgba(0,0,0,.1)'
export const ColorBorder = 'rgba(0,0,0,1)'
export const BorderWidth = 2

export const Section = styled(Box).attrs({})`
  max-width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  /* overflow: hidden; // by default, might be overridden... */

  > div,
  > header,
  > section {
    max-width: ${props => props.theme?.maxWidth || MaxWidth}px;
    width: 100%;
    text-align: left;
  }

  @media (max-width: 800px) {
    padding: 40px 20px 40px;
    font-size: 12px;
  }

  p {
    font-size: 20px;
    line-height: 1.8;
  }

  a {
    /* color: #ce00ff; */
  }

  h1,
  h2,
  h3 {
    color: inherit;

    i {
      opacity: 0.6;
    }
  }
`

export const ParagraphStyle = styled.div`
  font-size: 20px;

  & > h1 {
    color: inherit;
    font-size: 1.2em;
    line-height: 1.5;
    /* letter-spacing: .5px; */
    font-weight: 500;
  }

  & > h2 {
    color: inherit;
    font-size: 1em;
    line-height: 1.4;
    /* margin-bottom: 10px; */
    max-width: 700px;
  }

  & > h4 {
    color: inherit;
    font-weight: 700;
    line-height: 1.4;
    font-size: 18px;
    text-transform: uppercase;
    opacity: 0.2;
  }

  & > h3 {
    color: inherit;
    font-weight: 500;
    line-height: 1.4;
    font-size: 22px;
    /* opacity: .6; */
    /* color: #bf0023; */
  }

  & > p {
    margin-bottom: 1em;
    line-height: 1.7;
    font-weight: 400;
    font-size: 1em;
    color: #666;

    strong,
    a {
      opacity: 1;
      font-weight: 600;
      color: #000;
    }
  }
`

export const PageHeader = styled(Flex).attrs({
  // width: [1, 1, MaxWidth],
  width: 1,
  margin: 'auto',
  flexDirection: 'column',
  paddingTop: [20, 20, 20, 50],
  // paddingBottom: [50, 50, 50, 50],
  paddingX: [20, 20, 20, 0]
  // alignText: ['left', null, null, null]
})`
  text-align: left;
  color: black;
  /* color: red; */
  font-size: 17px;

  ${props =>
    props.center &&
    css`
      text-align: center !important;
    `};

  h1 {
    /* letter-spacing: .5px; */
    color: inherit;
    font-size: 2.3em;
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: 0.3em;
  }

  h2 {
    color: inherit;
    font-size: 20px;
    color: #000;
    opacity: 0.9;
    /* opacity: .6; */
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 25px;
  }

  p {
    opacity: 0.3;
    font-weight: 500;
    font-size: 16px;
  }
`

export const SectionGroup = styled.div`
  overflow: hidden; // by default, might be overridden...
  background: transparent;

  ${props =>
    props.black &&
    css`
      background: black;
    `}
  ${props =>
    props.white &&
    css`
      background: ${ColorPink};
    `}
  ${props =>
    props.white &&
    props.invert &&
    css`
      background: white;
    `}

filter: ${props => (props.invert ? 'invert(1)' : 'none')};

  @media (max-width: 800px) {
    border-bottom: 2px solid #00000011;
    border-bottom-width: ${props =>
      (props.white && ColorForeground) || props.invert ? '0' : '2px'};
  }

  ${props =>
    props.invert &&
    css`
      img:not(.invertable) {
        filter: invert(1);
      }

      .revert {
        filter: invert(1);
      }
    `};
`

export const SectionHeader = styled.div<{ center?: boolean }>`
  width: 100%;
  margin-bottom: 30px;

  ${props =>
    props.center &&
    css`
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
        text-align: center;
      }
    `}

  @media (max-width: 800px) {
    padding-left: 10px;
  }

  &&& {
    h1 {
      font-size: 1.4em;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1.5px;
      opacity: 1;
    }
  }
`

export const CentralizedContainer = styled(Section)`
  padding-top: 40px;
  padding-bottom: 40px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 22px;
  }
`

export const RelativeBox = styled(Box)`
  position: relative;
`

export function FadeInSection(props) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={'hidden'}
      style={{
        // display: 'inline-block',
        width: '100%'
      }}
      transition={{
        duration: 0.5,
        when: 'beforeChildren',
        // loop: Infinity,
        ease: 'circOut'
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -30 }
      }}
    >
      {props.children}
    </motion.div>
  )
}

export const BlurBall = styled.div`
  position: relative;
  right: 10px;
  /* opacity: ; */
  bottom: 30px;
  top: 10px;
  z-index: 10;

  &::before {
    filter: blur(100px);
    position: absolute;
    width: 240px;
    height: 240px;
    background: ${props =>
      ({
        yellow: 'gold',
        pink: '#F16994',
        green: '#F19469',
        blue: 'cornflowerblue'
      }[props.color] ||
      props.color ||
      '#F16994')};
  }
`

export function LogoNotification(props: {
  name: string
  dismissable?: boolean
  children: React.ReactNode
  link?: string
}) {
  const [visible, setVisible] = useState(true)

  const keyKey = `seen-logo-notification-${props.name}`

  useEffect(() => {
    if (!localStorage) {
      return
    }
    const value = localStorage.getItem(keyKey)
    // Unless over a day ago.
    if (value && new Date(parseInt(value) + 1 * 3600 * 1000) < new Date()) {
      setVisible(false)
    }
  }, [keyKey])

  function onClick() {
    if (props.link) {
      window.open(props.link)
    }
    // Hide item.
    setVisible(false)
    localStorage.setItem(keyKey, '' + Date.now())
  }

  if (props.dismissable && !visible) {
    return null
  }

  return (
    <LogoNotificationContainer onClick={onClick}>
      {/* link="/blog/2021-02-13-awwdience-human-spin-off"> */}
      {/* Human is now Awwdience 🚀 */}
      <Text variant='Smaller'>{props.children}</Text>
    </LogoNotificationContainer>
  )
}

export const LogoNotificationContainer = styled.div`
  font-size: 12px;
  padding: 0 1em;
  border-radius: 5px;
  margin-top: -5px;
  line-height: 3;
  background: #f8f8f8;
  /* background: ${props => props.theme.colorForeground ?? '#f8f8f8'}; */
  /* font-weight: 500; */
  /* color: black; */
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
`

export function SmallSquiglyDivider() {
  return (
    <div style={{ marginTop: 20 }}>
      <svg
        width='74'
        height='14'
        viewBox='0 0 74 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M31.7952 7.98604L31.2042 8.79269L31.2042 8.79269L31.7952 7.98604ZM32.3862 7.17938C36.1709 9.95234 38.7489 10.95 40.9 11.0454C43.0548 11.141 44.9539 10.346 47.4769 9.07974C49.9702 7.82839 52.9885 6.16568 57.1784 4.83425C61.3793 3.49932 66.7395 2.49992 74 2.5L74 4.5C66.9322 4.49993 61.7773 5.4714 57.7841 6.74032C53.78 8.01273 50.9252 9.58685 48.374 10.8672C45.8525 12.1327 43.5359 13.1644 40.8114 13.0435C38.0832 12.9224 35.1183 11.6605 31.2042 8.79269L32.3862 7.17938ZM0.321146 7.25152C4.1973 3.66792 8.25094 0.649207 13.403 0.0919782C18.5691 -0.466772 24.5933 1.46964 32.3862 7.17939L31.2042 8.79269C23.5995 3.22086 18.0754 1.59829 13.6181 2.08038C9.14665 2.56399 5.50149 5.18594 1.67885 8.72007L0.321146 7.25152Z'
          fill='black'
        />
      </svg>
    </div>
  )
}

export function SquiglyDivider() {
  return (
    <Flex marginTop={40} width={1} marginBottom={0}>
      <svg
        width='404'
        height='13'
        viewBox='0 0 404 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ margin: 'auto' }}
      >
        <path
          d='M182.569 3.02547L182.451 4.01841L182.451 4.01841L182.569 3.02547ZM96.5 2.64275L96.5394 1.64352L96.5 2.64275ZM249 10.5247L249.074 11.5219L249 10.5247ZM299.5 1.03528L299.55 2.03404L299.5 1.03528ZM362 10.5818L362.015 11.5817L362 10.5818ZM45 11.9249L44.928 12.9223L45 11.9249ZM137.5 11.4005L137.523 12.4002L137.5 11.4005ZM182.688 2.03252C200.763 4.19074 211.843 6.48864 221.116 8.02638C230.373 9.56145 237.875 10.3489 248.926 9.52743L249.074 11.5219C237.816 12.3588 230.147 11.5512 220.789 9.99943C211.447 8.45032 200.466 6.16946 182.451 4.01841L182.688 2.03252ZM248.926 9.52743C256.577 8.95874 262.248 6.9697 269.575 4.89562C276.894 2.8237 285.706 0.723273 299.45 0.0365307L299.55 2.03404C285.994 2.71137 277.335 4.77738 270.12 6.82001C262.911 8.86047 256.982 10.9341 249.074 11.5219L248.926 9.52743ZM299.45 0.0365307C303.175 -0.14958 307.667 0.393242 312.585 1.28175C317.511 2.1716 322.935 3.42231 328.526 4.67726C339.75 7.19691 351.652 9.73293 361.985 9.58189L362.015 11.5817C351.404 11.7368 339.27 9.13906 328.088 6.62869C322.475 5.36863 317.103 4.13026 312.23 3.24989C307.349 2.36819 303.04 1.85967 299.55 2.03404L299.45 0.0365307ZM361.985 9.58189C366.819 9.51124 374.358 8.60533 382.217 7.70478C390.029 6.80968 398.142 5.92214 404 5.92216L404 7.92216C398.28 7.92215 390.29 8.79285 382.445 9.69178C374.647 10.5853 366.975 11.5092 362.015 11.5817L361.985 9.58189ZM0.851016 6.33213C8.06723 5.2449 15.2488 6.13663 22.5292 7.41367C29.8515 8.69805 37.2341 10.3617 45.072 10.9275L44.928 12.9223C36.9551 12.3468 29.385 10.6468 22.1837 9.38359C14.9404 8.11308 8.02738 7.27347 1.14898 8.30981L0.851016 6.33213ZM45.072 10.9275C52.3996 11.4564 60.1434 9.01614 68.7277 6.44323C77.2405 3.89174 86.4877 1.24754 96.5394 1.64352L96.4606 3.64197C86.7827 3.26072 77.8311 5.80263 69.3019 8.35903C60.8441 10.894 52.7027 13.4835 44.928 12.9223L45.072 10.9275ZM96.5394 1.64352C99.0415 1.74209 101.878 2.38804 104.922 3.26103C107.961 4.13237 111.319 5.26482 114.805 6.34879C121.833 8.53425 129.573 10.5855 137.477 10.4007L137.523 12.4002C129.272 12.593 121.267 10.4527 114.211 8.25858C110.655 7.15276 107.387 6.04839 104.371 5.18355C101.36 4.32035 98.7135 3.73072 96.4606 3.64197L96.5394 1.64352ZM137.477 10.4007C145.217 10.2199 153.173 7.79487 160.921 5.54595C168.58 3.32268 176.103 1.24628 182.688 2.03252L182.451 4.01841C176.345 3.28938 169.232 5.2159 161.478 7.46666C153.813 9.69177 145.58 12.2119 137.523 12.4002L137.477 10.4007Z'
          fill='black'
        />
      </svg>
    </Flex>
  )
}

export function ArrowSvgRight0() {
  return (
    <svg
      width='217'
      height='122'
      viewBox='0 0 217 122'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M38.499 57.5L37.911 58.3089L38.499 57.5ZM157.999 53L157.039 52.7185L157.999 53ZM216.293 113.608C216.629 113.169 216.545 112.542 216.107 112.206L208.96 106.735C208.522 106.4 207.894 106.483 207.559 106.921C207.223 107.36 207.306 107.988 207.745 108.323L214.097 113.186L209.234 119.539C208.899 119.977 208.982 120.605 209.42 120.94C209.859 121.276 210.487 121.193 210.822 120.754L216.293 113.608ZM1 0.5C0.0670258 0.859943 0.0670414 0.859984 0.0670599 0.860032C0.06707 0.860058 0.0670915 0.860114 0.0671118 0.860166C0.0671523 0.860271 0.0672046 0.860406 0.0672687 0.860572C0.0673969 0.860905 0.0675723 0.861359 0.0677949 0.861935C0.0682401 0.863087 0.068874 0.864726 0.0696962 0.86685C0.0713405 0.871098 0.0737379 0.877284 0.076885 0.885386C0.0831791 0.901591 0.0924722 0.925462 0.104737 0.956823C0.129267 1.01954 0.165685 1.11223 0.213776 1.23349C0.309956 1.47599 0.452834 1.83277 0.640685 2.29264C1.01637 3.21235 1.57202 4.54457 2.29383 6.19971L4.12709 5.40022C3.41209 3.76071 2.86251 2.44295 2.49217 1.53633C2.30701 1.08304 2.16667 0.732584 2.07289 0.496133C2.026 0.377909 1.99075 0.288192 1.96736 0.228379C1.95567 0.198472 1.94693 0.176042 1.94119 0.161264C1.93832 0.153874 1.9362 0.148398 1.93483 0.144856C1.93414 0.143085 1.93365 0.141798 1.93334 0.140997C1.93318 0.140597 1.93308 0.140318 1.93301 0.140161C1.93298 0.140083 1.93297 0.140035 1.93296 0.140017C1.93296 0.140009 1.93296 0.140019 1.93296 0.140014C1.93296 0.140032 1.93297 0.140057 1 0.5ZM7.1765 16.6569C8.75619 19.8301 10.5718 23.2916 12.5944 26.853L14.3335 25.8653C12.3316 22.3404 10.533 18.9115 8.96692 15.7656L7.1765 16.6569ZM18.6321 36.7169C20.7668 39.9383 23.05 43.1057 25.4612 46.081L27.015 44.8218C24.6512 41.9048 22.4055 38.7905 20.2993 35.6121L18.6321 36.7169ZM33.388 54.5972C34.861 55.943 36.3698 57.1885 37.911 58.3089L39.087 56.6911C37.6133 55.6199 36.1621 54.4227 34.737 53.1207L33.388 54.5972ZM37.911 58.3089C39.2314 59.2687 40.5888 60.2095 41.9795 61.1298L43.0832 59.4619C41.7161 58.5573 40.3829 57.6331 39.087 56.6911L37.911 58.3089ZM50.4464 66.2543C53.3007 67.8343 56.2503 69.3294 59.2704 70.7282L60.111 68.9134C57.1332 67.5342 54.2264 66.0607 51.415 64.5045L50.4464 66.2543ZM68.3843 74.573C71.4656 75.75 74.5924 76.8234 77.7417 77.7821L78.3241 75.8688C75.2198 74.9238 72.1367 73.8654 69.098 72.7047L68.3843 74.573ZM87.3066 80.3198C90.561 81.0552 93.8153 81.6582 97.0443 82.1168L97.3255 80.1366C94.1528 79.6861 90.9517 79.093 87.7474 78.369L87.3066 80.3198ZM106.91 83.0603C110.288 83.2192 113.609 83.1975 116.842 82.9797L116.707 80.9842C113.557 81.1965 110.312 81.2181 107.004 81.0625L106.91 83.0603ZM126.714 81.6224C130.053 80.9038 133.247 79.9229 136.249 78.6569L135.472 76.814C132.597 78.0266 129.524 78.972 126.293 79.6672L126.714 81.6224ZM144.992 73.7215C147.681 71.733 150.102 69.4039 152.202 66.7111L150.625 65.4813C148.641 68.0256 146.352 70.2286 143.803 72.1134L144.992 73.7215ZM157.271 58.0272C157.909 56.5196 158.473 54.9383 158.959 53.2815L157.039 52.7185C156.574 54.3041 156.036 55.8132 155.429 57.2482L157.271 58.0272ZM158.959 53.2815C159.353 51.9377 159.76 50.4685 160.141 48.9077L158.198 48.4333C157.826 49.957 157.428 51.3957 157.039 52.7185L158.959 53.2815ZM161.717 39.9258C162.007 36.9177 162.037 33.7988 161.615 30.7325L159.634 31.005C160.029 33.8816 160.006 36.8397 159.726 39.7335L161.717 39.9258ZM158.819 21.8763C157.407 19.2606 155.442 16.847 152.785 14.7693L151.553 16.3448C153.988 18.2488 155.775 20.4477 157.059 22.8262L158.819 21.8763ZM144.647 10.3615C143.277 9.86004 141.809 9.41419 140.237 9.02879L139.761 10.9712C141.265 11.3403 142.663 11.7652 143.96 12.2397L144.647 10.3615ZM140.237 9.02879C138.547 8.61418 136.845 8.31188 135.142 8.11742L134.915 10.1045C136.535 10.2895 138.154 10.577 139.761 10.9712L140.237 9.02879ZM124.815 8.23374C121.367 8.70327 118.008 9.59788 114.832 10.8787L115.58 12.7335C118.602 11.5147 121.801 10.6627 125.085 10.2155L124.815 8.23374ZM105.82 15.9402C103.045 18.0204 100.563 20.468 98.4809 23.2422L100.08 24.4428C102.044 21.8272 104.389 19.5126 107.02 17.5406L105.82 15.9402ZM93.5818 32.3809C92.469 35.5443 91.8015 38.9513 91.6626 42.5646L93.6611 42.6414C93.7923 39.2276 94.4224 36.0184 95.4685 33.0446L93.5818 32.3809ZM92.6444 52.8463C93.0095 54.4778 93.4772 56.1376 94.0527 57.8231L95.9454 57.1769C95.3926 55.5578 94.9449 53.9679 94.5961 52.4095L92.6444 52.8463ZM94.0527 57.8231C94.6027 59.4336 95.2367 61.0417 95.9528 62.6425L97.7785 61.8259C97.0866 60.279 96.475 58.7277 95.9454 57.1769L94.0527 57.8231ZM100.94 71.7074C102.776 74.5061 104.866 77.2538 107.195 79.9231L108.702 78.608C106.43 76.0045 104.396 73.3293 102.612 70.6101L100.94 71.7074ZM114.444 87.2665C116.934 89.5077 119.61 91.6657 122.463 93.7207L123.632 92.0979C120.836 90.0843 118.217 87.9717 115.782 85.7799L114.444 87.2665ZM131.116 99.311C134.021 100.99 137.066 102.568 140.247 104.03L141.082 102.212C137.957 100.776 134.967 99.227 132.117 97.5795L131.116 99.311ZM149.77 107.903C152.934 109.032 156.208 110.05 159.587 110.945L160.1 109.012C156.774 108.131 153.553 107.129 150.442 106.019L149.77 107.903ZM169.616 113.178C172.921 113.778 176.311 114.263 179.782 114.626L179.99 112.636C176.568 112.279 173.228 111.801 169.973 111.21L169.616 113.178ZM190.023 115.32C193.378 115.428 196.8 115.422 200.286 115.296L200.213 113.297C196.773 113.422 193.396 113.427 190.087 113.321L190.023 115.32ZM210.528 114.589C212.215 114.418 213.917 114.219 215.631 113.991L215.367 112.009C213.674 112.234 211.993 112.43 210.326 112.599L210.528 114.589Z'
        fill='black'
      />
    </svg>
  )
}

export function ArrowSvgBottom() {
  return (
    <svg width='15' height='56' viewBox='0 0 15 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.59613 24.4217L6.84656 23.7598L6.84656 23.7598L7.59613 24.4217ZM8.30323 55.7071C7.9127 56.0976 7.27953 56.0976 6.88901 55.7071L0.525134 49.3431C0.134615 48.9525 0.134623 48.3194 0.525152 47.9288C0.915682 47.5383 1.54885 47.5383 1.93937 47.9289L7.59615 53.5858L13.2531 47.929C13.6436 47.5385 14.2768 47.5385 14.6673 47.929C15.0578 48.3196 15.0578 48.9527 14.6673 49.3432L8.30323 55.7071ZM8.26426 0.255759C9.38933 1.26544 10.4533 2.29134 11.387 3.35829L9.88186 4.67534C9.02196 3.69266 8.02301 2.72656 6.92844 1.74424L8.26426 0.255759ZM14.3031 7.97977C15.3167 10.6489 15.2906 13.6088 13.7872 17.0583L11.9537 16.2593C13.273 13.2323 13.2407 10.8157 12.4334 8.68982L14.3031 7.97977ZM11.0943 21.666C10.3104 22.7554 9.39738 23.8927 8.3457 25.0836L6.84656 23.7598C7.86075 22.6113 8.73113 21.5259 9.47091 20.4979L11.0943 21.666ZM8.3457 25.0836C6.9724 26.6388 5.99374 27.9046 5.3155 28.9829L3.62256 27.918C4.38063 26.7128 5.43629 25.3568 6.84656 23.7598L8.3457 25.0836ZM4.15959 34.0059C4.40717 35.0764 4.89799 36.1958 5.52803 37.7762C6.14462 39.3228 6.84468 41.2014 7.41926 43.6449L5.47236 44.1027C4.92996 41.796 4.26969 40.0204 3.67023 38.5168C3.08423 37.0469 2.50329 35.7202 2.21104 34.4566L4.15959 34.0059ZM8.38265 49.813C8.51855 51.3773 8.59615 53.098 8.59613 55L6.59613 55C6.59615 53.1525 6.52078 51.4897 6.39015 49.9861L8.38265 49.813Z'
        fill='black'
      />
    </svg>
  )
}

export const RainbowSpan = styled.span`
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #f3ec78, #af4261);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  display: inline;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  animation: gradient 8s ease infinite;
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const BenefitNumber = styled.div`
  border-radius: 50px;
  height: 2.4em;
  width: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colorBackground ?? 'rgba(0, 0, 0, 0.1)'};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1em;
`

export const ParagraphStyle2 = styled.div<{ center?: boolean }>`
  ${props =>
    props.center &&
    css`
      text-align: center;
      width: 100%;
    `}

  h1 {
    /* color: inherit; */
    line-height: 1.5;
    /* letter-spacing: .5px; */
    font-weight: 500;
    font-size: 3em;
    line-height: 1.3;
  }

  h2 {
    /* color: inherit; */
    font-size: 1.5em;
    line-height: 1.4;
    /* margin-bottom: 10px; */
    max-width: 700px;
  }

  h3 {
    /* color: inherit; */
    font-weight: 500;
    line-height: 1.4;
    font-size: 22px;
    opacity: 0.4;
    /* color: #bf0023; */
  }

  p {
    margin-bottom: 1em;
    line-height: 1.7;
    font-size: 1.6em;
    font-weight: 400;
    letter-spacing: 0.3px;
    font-weight: 500;
    color: #888;

    strong {
      opacity: 1;
      font-weight: 600;
      color: black;
    }

    a {
      /* border-bottom: 2px solid #888; */
    }
  }
`
