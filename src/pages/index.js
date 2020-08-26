import React, { useContext } from "react"
import styled, { css } from "styled-components"
import Context from "../components/context"
import {
  Title,
  Paragraph,
  ContentReveal,
  Row,
  Col2,
  Col8,
} from "../components/ui"

import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"

const TitleBlock = styled.div`
  font-weight: bold;
  text-align: right;
  padding-bottom: 7vw;
  padding-top: 7vw;
`

const IntroBlock = styled.div`
  max-width: 33vw;
  margin-bottom: 5vw;
`

const AboutBlock = styled.div`
  width: 100%;
  padding-top: 11vw;
  padding-bottom: 11vw;
`

const AboutSpan = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: lowercase;
`

const CopyBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Copy = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  display: block;
  text-transform: lowercase;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
    text-align: right;
    max-width: 70vw;
  }
`

const IndexPage = () => {
  const projects = ["diego", "emerge", "bitboss", "i3p"]
  const { showLoader } = useContext(Context)

  return (
    <>
      <SEO title="Home" />
      <TitleBlock>
        <Title className={`${!showLoader && "animation-stagger"}`}>
          <Spanify text="edo" hasAnimation />
        </Title>
      </TitleBlock>
      <IntroBlock>
        <Paragraph>
          Edoardo is a detail-oriented front-end developer with a passion for
          design
        </Paragraph>
      </IntroBlock>
      <ContentReveal className={`${!showLoader && "animation-reveal"}`}>
        {projects.map((project, i) => (
          <ProjectPreview
            title={project}
            isRight={i % 2 === 0}
            count={i < 10 ? `0${i + 1}` : i + 1}
            key={`project-${i}`}
          />
        ))}
        <AboutBlock
          data-scroll
          data-scroll-offset="40%"
          className="transition-stagger"
        >
          <Row>
            <Col2>
              <AboutSpan>About</AboutSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Spanify
                  lines={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
                    "enim ad minim veniam, quis nostrud exercitation",
                    " ",
                    "Currently at WILD",
                  ]}
                />
              </Paragraph>
            </Col8>
          </Row>
          <Row>
            <Col2>
              <AboutSpan>Contact</AboutSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>Linkedin</Paragraph>
              <Paragraph noMarginBottom>Email</Paragraph>
            </Col8>
          </Row>
        </AboutBlock>
        <CopyBlock>
          <Copy>All images are copyright to their respective owners</Copy>
        </CopyBlock>
      </ContentReveal>
    </>
  )
}

export default IndexPage
