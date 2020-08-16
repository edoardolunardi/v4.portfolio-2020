import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${theme.padding.content};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${theme.fontSize.medium};
`

const BrowserLink = styled.a`
  display: inline-block;
`

const ChangeBrowser = () => (
  <Container>
    <Title>
      This website works best on
      <BrowserLink href="https://www.google.com/intl/en_en/chrome/">
        Chrome
      </BrowserLink>
      /
      <BrowserLink href="https://www.mozilla.org/en-US/firefox/new/">
        Firefox
      </BrowserLink>
      .
    </Title>
  </Container>
)

export default ChangeBrowser
