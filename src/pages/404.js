import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Title } from "../components/ui"
import gif from "../images/404.gif"
import SEO from "../components/seo"

const Container = styled.div`
  width: calc(100vw - 8vw);
  height: calc(100vh - 8vw);
`

const TitleBlock = styled.div`
  font-weight: bold;
  text-align: right;
  padding-bottom: 4vw;
  padding-top: 4vw;
  text-transform: lowercase;

  ${down("md")} {
    padding-bottom: 15vw;
  }
`

const GifContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.text};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <TitleBlock>
        <Title>404</Title>
      </TitleBlock>
      <GifContainer>
        <img src={gif}></img>
      </GifContainer>
    </Container>
  </>
)

export default NotFoundPage
