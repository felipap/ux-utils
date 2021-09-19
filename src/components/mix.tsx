import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Container>
      <button data-testid='button' onClick={onClick}>
        {label}
      </button>
    </Container>
  )
}

const Container = styled.div`
`

export default Button
