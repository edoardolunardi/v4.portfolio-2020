import React from "react"
import { Anchor } from "./ui"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${props => props.theme.paddings.content};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg};
  text-transform: lowercase;
`

const AnchorsContainer = styled.div``

const ChangeBrowser = () => (
  <Container>
    <Title>
      This website works best on
      <AnchorsContainer>
        <Anchor href="https://www.google.com/intl/en_en/chrome/">Chrome</Anchor>
        /
        <Anchor href="https://www.mozilla.org/en-US/firefox/new/">
          Firefox.
        </Anchor>
      </AnchorsContainer>
    </Title>
  </Container>
)

export default ChangeBrowser
