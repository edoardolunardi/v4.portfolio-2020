import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"
import { theme } from "../styles/theme"

const Year = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${theme.fontSize.small};
  padding-top: ${theme.padding.content};
  padding-left: ${theme.padding.content};
`

const Name = styled.h2`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${theme.fontSize.small};
  padding-top: ${theme.padding.content};
  padding-right: ${theme.padding.content};
`

const Title = styled.h1`
  user-select: none;
  margin-left: -0.5vw;
  padding-top: 22vw;
  line-height: 0.8;
  margin-bottom: 4vw;
  font-size: ${theme.fontSize.big};
`

const TitleBlock = styled.div``

const About = styled.div`
  width: 100%;
  margin-top: 8vw;
  margin-bottom: 8vw;
`

const AboutContent = styled.p`
  font-size: ${theme.fontSize.base};
  margin-bottom: 8vw;
  user-select: none;
`
const AboutContactWrapper = styled.span`
  display: block;
`

const AboutContact = styled.a`
  font-size: ${theme.fontSize.base};
  display: inline-block;
`

const CopyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Copy = styled.span`
  font-size: ${theme.fontSize.small};
  display: block;
`

const IndexPage = () => {
  const projects = ["diego", "emerge", "bitboss", "i3p"]

  return (
    <>
      <SEO title="Home" />
      <Year>2020</Year>
      <Name>Edoardo Lunardi</Name>
      <Title>
        <TitleBlock className="animate-stagger">
          <Spanify text="Front" />
        </TitleBlock>
        <TitleBlock className="animate-stagger">
          <Spanify text="End developer" />
        </TitleBlock>
      </Title>
      {projects.map((project, i) => (
        <ProjectPreview
          title={project}
          left={i % 2 !== 0}
          key={`project-${i}`}
        />
      ))}
      <About className="animate">
        <AboutContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </AboutContent>
        <AboutContactWrapper>
          <AboutContact href="#">Email</AboutContact>
        </AboutContactWrapper>
        <AboutContactWrapper>
          <AboutContact href="#">Linkedin</AboutContact>
        </AboutContactWrapper>
      </About>
      <CopyWrapper>
        <Copy>All images are copyright to their respective owners</Copy>
      </CopyWrapper>
    </>
  )
}

export default IndexPage
