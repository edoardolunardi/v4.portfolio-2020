import React from "react"
import styled from "styled-components"

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
`

const Panel2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.black};
`

const Loader = () => {
  return (
    <Container>
      <Panel1 />
      <Panel2 />
    </Container>
  )
}

export default Loader
