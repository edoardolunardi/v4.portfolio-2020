import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/projectPreview"

const Year = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.6vw;
  padding-top: 1vw;
  padding-left: 1vw;
`

const Name = styled.h2`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.6vw;
  padding-top: 1vw;
  padding-right: 1vw;
`

const Title = styled.h1`
  font-size: 13.339vw;
  margin-left: -0.5vw;
  padding-top: 22vw;
  line-height: 0.8;
  margin-bottom: 4vw;
`

const TitleSpan = styled.span`
  display: ${props => (props.block ? "block" : "inline-block")};
`

const IndexPage = () => {
  const projects = ["diego", "emerge", "bitboss", "i3p"]

  return (
    <Layout>
      <SEO title="Home" />
      <Year>2020</Year>
      <Name>Edoardo Lunardi</Name>
      <Title>
        <TitleSpan block>Front</TitleSpan>
        <TitleSpan>End developer</TitleSpan>
      </Title>
      {projects.map((project, i) => (
        <ProjectPreview
          title={project}
          left={i % 2 === 0}
          key={`project-${i}`}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
