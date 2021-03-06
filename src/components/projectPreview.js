import React from "react"
import styled, { css, keyframes } from "styled-components"
import Img from "gatsby-image"
import { down } from "styled-breakpoints"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Paragraph } from "./ui"
import Spanify from "../components/spanify"

const scale = keyframes`
  from {
    transform: scale(1.3);
  }

  to {
    transform: scale(1.66667)
  }
`
const StyledLink = styled(Link)`
  margin-bottom: 13vw;
  display: block;
  max-width: 70%;
  height: 42vw;
  text-decoration: none;
  position: relative;

  ${props =>
    props.$isRight &&
    css`
      margin-left: auto;
    `}

  &:last-of-type {
    margin-bottom: 0;
  }

  ${down("md")} {
    height: 60vw;
    max-width: 100%;
  }

  ${down("sm")} {
    height: 50vh;
    max-width: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5vw;

  ${props =>
    props.animateScale &&
    css`
      .project-image {
        animation: ${scale} 1s ${props.theme.transitions.bezier};
      }
    `}
`

const Counter = styled.div`
  opacity: 0.5;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  position: absolute;
  z-index: 1;
  top: 0;
  margin-top: -7vw;

  ${props =>
    props.$isRight
      ? css`
          left: 0;
          margin-left: 7vw;
        `
      : css`
          right: 0;
          margin-right: 7vw;
        `}
`

const Title = styled.div`
  text-align: ${props => (props.$isRight ? "right" : "left")};
`

const ProjectPreview = ({ title, slug, image, $isRight, count }) => (
  <StyledLink $isRight={$isRight} to={slug}>
    <Counter data-scroll className="transition-stagger" $isRight={$isRight}>
      <Spanify text={count} />
    </Counter>
    <Container data-scroll>
      <Img fluid={image} draggable={false} className="project-image" />
    </Container>
    <Title data-scroll $isRight={$isRight} className="transition-stagger">
      <Paragraph>
        <Spanify text={title} />
      </Paragraph>
    </Title>
  </StyledLink>
)

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  $isRight: PropTypes.bool,
  inProject: PropTypes.bool,
}

export default ProjectPreview
