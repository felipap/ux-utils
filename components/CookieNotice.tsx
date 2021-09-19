import React, { useState } from 'react'
import styled from 'styled-components'

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  function onClick() {

  }

  return (
    <Container>
      This website uses cookies to improve your experience.
      <button onClick={onClick}>Okay</button>
    </Container>
  )
}

const Container = styled.div`
`
