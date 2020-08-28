import React, { useContext } from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import Context from "../components/context"
import {
  Title,
  Paragraph,
  Span,
  ContentReveal,
  StaggerReveal,
  Row,
  Col2,
  Col8,
  Anchor,
} from "../components/ui"
import useMediaQuery from "../hooks/useMediaQuery"
import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"

const TitleBlock = styled.div`
  font-weight: bold;
  text-align: right;
  padding-bottom: 4vw;
  padding-top: 4vw;

  ${down("md")} {
    padding-bottom: 15vw;
  }
`

const IntroBlock = styled.div`
  margin-bottom: 5vw;

  ${down("md")} {
    margin-bottom: 15vw;
  }
`

const AboutBlock = styled.div`
  width: 100%;
  padding-top: 11vw;
  padding-bottom: 11vw;
`

const AboutSpan = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: lowercase;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
    margin-bottom: 4vw;
  }
`

const CopyBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Copy = styled(Span)`
  font-size: ${props => props.theme.fontSizes.xs};
  display: block;
  text-transform: lowercase;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
    text-align: right;
    max-width: 70vw;
  }
`

const IndexPage = () => {
  const projects = ["diego", "emerge", "bitboss", "i3p"]
  const { showLoader } = useContext(Context)
  const isMobile = useMediaQuery("md")

  return (
    <>
      <SEO title="Home" />
      <TitleBlock>
        <StaggerReveal animate={!showLoader}>
          <Title>
            <Spanify text="edo" hasAnimation />
          </Title>
        </StaggerReveal>
      </TitleBlock>
      <IntroBlock>
        <StaggerReveal animate={!showLoader}>
          <Paragraph>
            <Spanify
              lines={[
                "Edoardo is a detail-oriented",
                "front-end developer with a",
                "passion for design",
              ]}
              hasAnimation
              animateAfter={300}
            />
          </Paragraph>
        </StaggerReveal>
      </IntroBlock>
      <ContentReveal animate={!showLoader} animateAfter={500}>
        {projects.map((project, i) => (
          <ProjectPreview
            title={project}
            $isRight={i % 2 === 0}
            count={i < 10 ? `0${i + 1}` : i + 1}
            key={`project-${i}`}
          />
        ))}
        <AboutBlock>
          <Row
            data-scroll
            data-scroll-offset="20%"
            className="transition-stagger"
            id="#about"
          >
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
          <Row
            data-scroll
            data-scroll-offset={isMobile ? "0" : "20%"}
            className="transition-stagger"
            id="#contact"
          >
            <Col2>
              <AboutSpan>Contact</AboutSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Anchor
                  href="https://www.linkedin.com/in/edoardolunardi/"
                  target="_blank"
                >
                  <Span>Linkedin</Span>
                </Anchor>
              </Paragraph>
              <Paragraph noMarginBottom>
                <Anchor href="mailto:edward.lunardi@gmail.com">
                  <Span>Email</Span>
                </Anchor>
              </Paragraph>
            </Col8>
          </Row>
        </AboutBlock>
        <CopyBlock
          data-scroll
          data-scroll-offset="-10%"
          className="transition-stagger"
        >
          <Copy>All images are copyright to their respective owners</Copy>
        </CopyBlock>
      </ContentReveal>
    </>
  )
}

export default IndexPage
