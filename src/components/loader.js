import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${props => props.theme.colors.black};
`

const Loader = () => {
  return <Container></Container>
}

export default Loader
