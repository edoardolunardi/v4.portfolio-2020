import React, { useContext } from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { rgba } from "polished"
import Context from "../../components/context"
import {
  Title,
  ContentReveal,
  StaggerReveal,
  Row,
  Col2,
  Col8,
  Span,
  Paragraph,
  Anchor,
} from "../../components/ui"
import LazyVideo from "../../components/lazyVideo"
import useMediaQuery from "../../hooks/useMediaQuery"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectHero from "../../components/projectHero"
import OpenSvg from "../../icons/open-arrow.svg"

// Media
import homeVideo from "../../projects-media/diego/home.mp4"
import menuVideo from "../../projects-media/diego/menu.mp4"
import gallery from "../../projects-media/diego/gallery.mp4"
import gallery2 from "../../projects-media/diego/gallery2.mp4"
import gallery3 from "../../projects-media/diego/gallery3.mp4"
import gallery4 from "../../projects-media/diego/gallery4.mp4"

const VideoContainer = styled.div`
  padding: 5vw;
  background-color: ${props => rgba(props.theme.colors.black, 0.5)};
  margin-bottom: 5vw;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 51.53%;

  > video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`

const TitleBlock = styled.div`
  font-weight: bold;
  text-align: right;
  padding-bottom: 10vw;
  padding-top: 4vw;

  ${down("md")} {
    padding-bottom: 15vw;
  }
`

const InfoBlock = styled.div`
  width: 100%;
  padding-top: 11vw;
  padding-bottom: 11vw;
`

const InfoSpan = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: lowercase;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
    margin-bottom: 4vw;
  }
`

const Website = styled(Anchor)`
  display: flex;
  align-items: center;
`

const DiegoPage = () => {
  const { showLoader } = useContext(Context)
  const isMobile = useMediaQuery("md")
  return (
    <>
      <SEO title="Diego Ravier" />
      <TitleBlock>
        <StaggerReveal animate={!showLoader}>
          <Title>
            <Spanify text="diego" hasAnimation />
          </Title>
        </StaggerReveal>
      </TitleBlock>
      <ContentReveal animate={!showLoader} animateAfter={300}>
        <ProjectHero title="diego" />
        <InfoBlock>
          <Row
            data-scroll
            data-scroll-offset="20%"
            className="transition-stagger"
            id="#about"
          >
            <Col2>
              <InfoSpan>The project</InfoSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Spanify
                  lines={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
                    "enim ad minim veniam, quis nostrud exercitation",
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
              <InfoSpan>Agency</InfoSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Span>Some agency</Span>
              </Paragraph>
              <Paragraph noMarginBottom>
                <Website href="https://diegoravier.com/" target="_blank">
                  <Span>
                    Open website
                    <OpenSvg />
                  </Span>
                </Website>
              </Paragraph>
            </Col8>
          </Row>
        </InfoBlock>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={homeVideo} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={menuVideo} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery2} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery3} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery4} />
          </VideoWrapper>
        </VideoContainer>
      </ContentReveal>
    </>
  )
}

export default DiegoPage
