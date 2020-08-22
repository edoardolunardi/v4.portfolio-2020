import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import ProjectPreview from "../../components/projectPreview"

const Title = styled.h1`
  user-select: none;
  margin-left: -0.5vw;
  padding-top: 22vw;
  line-height: 0.8;
  margin-bottom: 4vw;
  font-size: ${props => props.theme.fontSizes.big};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-top: 30vh;
  }
`

const DiegoPage = () => {
  return (
    <>
      <Title>Diego</Title>
      <ProjectPreview title="diego" inProject />
    </>
  )
}

export default DiegoPage
