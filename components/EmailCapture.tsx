
import React, { useRef } from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'


export default function EmailCapture() {
  const emailRef = useRef<any>(null)

  if (typeof window === 'undefined') {
    return null
  }

  function onSubmit(event) {
    event.preventDefault()

    if (typeof window !== 'undefined') {
      // Yes super hacky. Not sorry.
      // @ts-ignore
      window.formModalOrigin = 'form'
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      window.formModalEmail = (emailRef?.current) ? emailRef.current.value : null
      emailRef.current.value = ''
      setTimeout(() => {
        window.location.href = '/#form'
      }, 200)
    }
  }

  return (
    <Container>
      <Flex
        flexDirection="row"
        width={[1, 300]}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <form onSubmit={onSubmit}>
          <div className="visible-elements">
            <input type="text" name="email" placeholder="Enter your email" ref={emailRef} />
            <button type="submit">
              Get Started
            </button>
          </div>
        </form>
      </Flex>
    </Container>
  )
}


const Container = styled.div`
font-size: 13px;
max-height: 150px;
overflow: hidden;
font-family: Inter;

small {
  display: none !important;
  line-height: 0 !important;
  margin: 0 !important;
}

a[href="https://kwes.io/"] {
  opacity: 0 !important;
  height: 0 !important;
  height: 0 !important;
}


@media (max-width: 800px) {
  font-size: 13px;

  input {
    width: 80% !important;
  }
  button {
  }
}

.visible-elements {
  display: flex;
  flex-direction: row;
}

input {
  width: 300px;
  max-width: 60%;
  color: black;
  display: inline-block;
  height: 50px;
  vertical-align: center;
  border: 1px solid #000;
  border-radius: 3px;
  outline: none;
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
  margin-right: 5px;
  letter-spacing: 1px;
  box-shadow: inset 0 0 2px #AAA;

  transition: all 300ms;
  &:focus {
    box-shadow: inset -1px 1px 2px #AAA;
  }
}

input::placeholder {
  letter-spacing: .5px;
}

button {
  font-weight: 400;
  letter-spacing: 0.5px;
  border-radius: 4px;
  font-size: 16px;
  background: black;
  height: 50px;
  display: inline-block;
  border: none;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 0 1em;
  transition: all 200ms;
  font-family: 'Poppins', sans-serif;
  color: white;
  white-space: nowrap;

  &:active {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  }
}
`