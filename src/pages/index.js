import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"

const Year = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.paddings.content};
  padding-left: ${props => props.theme.paddings.content};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`

const Name = styled.h2`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.paddings.content};
  padding-right: ${props => props.theme.paddings.content};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`

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

const TitleBlock = styled.div``

const About = styled.div`
  width: 100%;
  margin-top: 8vw;
  margin-bottom: 8vw;
`

const AboutContent = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  margin-bottom: 8vw;
  user-select: none;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`

const AboutContactWrapper = styled.span`
  display: block;
`

const AboutContact = styled.a`
  font-size: ${props => props.theme.fontSizes.base};
  display: inline-block;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`

const CopyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Copy = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  display: block;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
    text-align: right;
    max-width: 70vw;
  }
`

const IndexPage = () => {
  const projects = ["diego", "emerge", "bitboss", "i3p"]

  return (
    <Layout>
      <SEO title="Home" />
      <Year>2020</Year>
      <Name>Edoardo Lunardi</Name>
      <Title>
        <TitleBlock className="animation-stagger">
          <Spanify text="Front" isAnimation />
        </TitleBlock>
        <TitleBlock className="animation-stagger">
          <Spanify text="End developer" isAnimation />
        </TitleBlock>
      </Title>
      {projects.map((project, i) => (
        <ProjectPreview
          title={project}
          left={i % 2 !== 0}
          key={`project-${i}`}
        />
      ))}
      <About>
        <AboutContent
          data-scroll
          data-scroll-offset="40%"
          className="transition-stagger"
        >
          <Spanify
            lines={[
              "Lorem ipsum dolor sit amet,",
              "consectetur adipiscing elit, sed do",
              "eiusmod tempor incididunt ut",
              "Lorem ipsum dolor sit amet,",
              "consectetur adipiscing elit, sed do",
              "eiusmod tempor incididunt ut",
            ]}
          />
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
    </Layout>
  )
}

export default IndexPage
