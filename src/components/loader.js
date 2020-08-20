import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Spanify from "./spanify"

const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
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
  const [stagger, setStagger] = useState(false)

  useEffect(() => {
    setStagger(true)
  }, [])

  return (
    <Container>
      <Panel1>
        <Intro className={`animate-stagger ${stagger && "visible"}`}>
          <Spanify text="Keep grinding" />
        </Intro>
      </Panel1>
      <Panel2 />
    </Container>
  )
}

export default Loader