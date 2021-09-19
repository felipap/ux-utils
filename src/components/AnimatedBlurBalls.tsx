
import React from 'react'
import styled from 'styled-components'

export default function AnimatedBlurBalls() {  
  return (
    <Container>
      <div className="blurBall" />
    </Container>
  )
}

const Container = styled.div`
position: absolute;
height: 10px;

@media (max-width: 800px) {
  // Hiding for mobile because the change in height is fucking up the layout
  // (even though it's position absolute !?).
  display: none;
}

@keyframes foobar {
  0%, 100% {
    width: 400px;
    height: 400px;
    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #E91E63;
    filter: blur(60px);
    transform: rotate(-30deg);
    border-radius: 100px;
  }
  70% {
    width: 400px;
    height: 400px;
    margin-right: 100px;
    border-radius: 200px;
    background: linear-gradient(90deg, #2D9CDB 0%, rgba(255, 255, 255, 0) 100%), #9B51E0;
    filter: blur(70px);
    transform: rotate(90deg);
  }
}

.blurBall {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 15%;
  z-index: -1;
  opacity: .3;
  animation: foobar 5s infinite;
  background: linear-gradient(180deg, #2d9cdb, rgba(255,2r55,255,0)), #E91E63;
}
`