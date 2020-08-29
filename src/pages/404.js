import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Container = styled.div`
  width: calc(100vw - 8vw);
  height: calc(100vh - 8vw);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 2vw;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`

const StyledLink = styled(Link)`
  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
  }
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <Title>404</Title>
      <StyledLink to="/">back home</StyledLink>
    </Container>
  </>
)

export default NotFoundPage
