import React, { useContext } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { rgba } from "polished"
import Context from "../components/context"
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
} from "../components/ui"
import LazyVideo from "../components/lazyVideo"
import useMediaQuery from "../hooks/useMediaQuery"

import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectHero from "../components/projectHero"
import OpenSvg from "../icons/open-arrow.svg"

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
  text-transform: lowercase;

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

const Project = ({ data }) => {
  const { markdownRemark } = data
  const { content } = markdownRemark
  const { seo, title, cover, description, agency, website, videos } = content
  const { showLoader } = useContext(Context)
  const isMobile = useMediaQuery("md")

  return (
    <>
      <SEO
        title={seo.title}
        ogImage={seo.image.publicURL}
        description={seo.description}
      />
      <TitleBlock>
        <StaggerReveal animate={!showLoader}>
          <Title>
            <Spanify text={title} hasAnimation />
          </Title>
        </StaggerReveal>
      </TitleBlock>
      <ContentReveal animate={!showLoader} animateAfter={300}>
        <ProjectHero image={cover.childImageSharp.fluid} />
        <InfoBlock>
          <Row
            data-scroll
            data-scroll-offset="20%"
            className="transition-stagger"
          >
            <Col2>
              <InfoSpan>The project</InfoSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Spanify lines={description} />
              </Paragraph>
            </Col8>
          </Row>
          <Row
            data-scroll
            data-scroll-offset={isMobile ? "0" : "20%"}
            className="transition-stagger"
          >
            <Col2>
              <InfoSpan>Agency</InfoSpan>
            </Col2>
            <Col8>
              <Paragraph noMarginBottom>
                <Anchor href={agency.link} target="_blank">
                  {agency.name}
                </Anchor>
              </Paragraph>
              <Paragraph noMarginBottom>
                <Website href={website} target="_blank">
                  <Span>
                    Open website
                    <OpenSvg />
                  </Span>
                </Website>
              </Paragraph>
            </Col8>
          </Row>
        </InfoBlock>
        {videos &&
          videos.map((video, i) => (
            <VideoContainer key={i}>
              <VideoWrapper>
                <LazyVideo src={`/diego/${video}`} />
              </VideoWrapper>
            </VideoContainer>
          ))}
      </ContentReveal>
    </>
  )
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      content: frontmatter {
        slug
        seo {
          title
          image {
            publicURL
          }
          description
        }
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        description
        agency {
          name
          link
        }
        website
        videos
      }
    }
  }
`
