import React, { useContext } from "react"
import { graphql } from "gatsby"
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
import useBreakpoint from "../hooks/useBreakpoint"
import SEO from "../components/seo"
import Spanify from "../components/spanify"
import ProjectPreview from "../components/projectPreview"

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

const HomePage = ({ data }) => {
  const { page, projects } = data
  const { content } = page

  const { seo, title, subtitle, about, linkedin, email, copy } = content
  const { showLoader } = useContext(Context)
  const isMobile = useBreakpoint("md")

  return (
    <>
      <SEO title={seo.title} ogImage={seo.image.publicURL} />
      <TitleBlock>
        <StaggerReveal animate={!showLoader}>
          <Title>
            <Spanify text={title} hasAnimation />
          </Title>
        </StaggerReveal>
      </TitleBlock>
      <IntroBlock>
        <StaggerReveal animate={!showLoader}>
          <Paragraph>
            <Spanify lines={subtitle} hasAnimation animateAfter={300} />
          </Paragraph>
        </StaggerReveal>
      </IntroBlock>
      <ContentReveal animate={!showLoader} animateAfter={500}>
        {projects.edges.map((project, i) => (
          <ProjectPreview
            title={project.node.frontmatter.title}
            slug={project.node.frontmatter.slug}
            image={project.node.frontmatter.cover.childImageSharp.fluid}
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
                <Spanify lines={about} />
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
                <Anchor href={linkedin} target="_blank">
                  <Span>Linkedin</Span>
                </Anchor>
              </Paragraph>
              <Paragraph noMarginBottom>
                <Anchor href={`mailto:${email}`}>
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
          <Copy>{copy}</Copy>
        </CopyBlock>
      </ContentReveal>
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query($slug: String!) {
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      content: frontmatter {
        slug
        seo {
          title
          image {
            publicURL
          }
        }
        title
        subtitle
        about
        linkedin
        email
        copy
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { slug: { ne: $slug } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
