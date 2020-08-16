import React from "react"
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
  font-size: ${props => props.theme.fontSizes.medium};
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
