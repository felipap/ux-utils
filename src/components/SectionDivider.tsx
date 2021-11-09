
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const ColorPink = '#fdf8f7'
const ColorBackground = '#fff'
const ColorForeground = '#fafafa'

const HEIGHT = 115

interface Props {
  from?: string
  to?: string
  flip?: boolean
  straight?: boolean
}

export function SectionDivider({
  from = 'white',
  to = 'white',
  flip = false,
  straight = false
}: Props) {
  from = from === 'rosa' ? ColorBackground : from
  to = to === 'rosa' ? ColorBackground : to

  from = from === 'white' ? ColorPink : from
  to = to === 'white' ? ColorPink : to

  // const size = useWindowSize()

  if (straight) {
    return (
      <Container>
        <svg width="100%" height="6" viewBox="0 0 1440 5" fill="none" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="1440" y2="0" strokeWidth={5} stroke="rgba(0,0,0,.05)" />
        </svg>
      </Container>
    )
  }

  // if (seed % 2) {
  // }

  // if (typeof window !== `undefined`) {
  //   return null
  // }
  const height = useMemo(() => {
    return Math.trunc(100 + Math.random() * 60)
  }, [])
  const path = useMemo(() => {
    return (
      <path d="M989.098 82.5005C1127.82 69.9827 1292.82 73.1904 1398.44 93.7659C1514.13 116.306 1545.52 64.1653 1439.43 12.068L-26.8619 0.640747L-18.6162 110.583C-5.20178 117.975 79.0507 102.021 155.269 102.021C231.487 102.021 472.338 114.341 562.275 114.341C652.213 114.341 850.38 95.0184 989.098 82.5005Z" fill={from} strokeWidth={7} stroke="rgba(0,0,0,.0)" />
    )
  }, [])

  return (
    <Container style={{ background: to, height, marginTop: 0 }}>
      <svg style={{ marginTop: -30 }} width="100%" height={HEIGHT} viewBox="0 0 1440 115" fill="none" preserveAspectRatio="none">
        {path}
      </svg>
    </Container>
  )
}

const Container = styled.div`
overflow: hidden;

svg {
  width: 100%;
}

@media (max-width: 800px) {
  & {
    margin: 0 !important;
    height: 0 !important;
  }
}
`

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
