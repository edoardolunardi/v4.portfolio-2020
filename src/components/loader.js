import React, { useContext, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { StaggerReveal } from "./ui"
import Context from "./context"
import Spanify from "./spanify"

const duration = 1800
const delay = 2000

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
  animation: ${exit} ${duration}ms
    ${props => props.theme.transitions.bezierLoading};
  animation-fill-mode: both;
  animation-delay: ${delay}ms;
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
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  text-transform: lowercase;
`

const Loader = () => {
  const { setShowLoader } = useContext(Context)

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, duration + delay)
  }, [setShowLoader])

  return (
    <Container>
      <Panel1>
        <StaggerReveal animate={true}>
          <Intro>
            <Spanify text="Keep grinding" hasAnimation />
          </Intro>
        </StaggerReveal>
      </Panel1>
      <Panel2 />
    </Container>
  )
}

export default Loader
