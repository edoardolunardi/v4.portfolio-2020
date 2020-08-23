import React from "react"
import styled, { css } from "styled-components"
import Title from "../components/ui/title"

import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"

const TitleBlock = styled.div`
  ${props =>
    props.hasAccent &&
    css`
      > span:nth-of-type(1),
      > span:nth-of-type(3),
      > span:nth-of-type(10) {
        color: ${props.theme.colors.accent};
      }
    `}
`

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
    <>
      <SEO title="Home" />
      <Title>
        <TitleBlock className="animation-stagger">
          <Spanify text="Front" isAnimation />
        </TitleBlock>
        <TitleBlock hasAccent className="animation-stagger">
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
    </>
  )
}

export default IndexPage
