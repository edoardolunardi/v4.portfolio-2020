import React, { useContext, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Context from "./context"
import Spanify from "./spanify"

const exit = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -200vh, 0);
  }
`

const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  animation: ${exit} 2s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 2s;
`

const Panel1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.isabelline};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Panel2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.black};
`

const Intro = styled.span`
  font-size: ${props => props.theme.fontSizes.big};
  text-transform: uppercase;
`

const Loader = () => {
  const { setShowLoader } = useContext(Context)

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 4000)
  }, [setShowLoader])

  return (
    <Container>
      <Panel1>
        <Intro className="animation-stagger">
          <Spanify text="Keep grinding" hasAnimation />
        </Intro>
      </Panel1>
      <Panel2 />
    </Container>
  )
}

export default Loader
