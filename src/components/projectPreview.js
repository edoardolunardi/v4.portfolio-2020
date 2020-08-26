import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Paragraph } from "./ui"
import Diego from "./gatsby-images/diego.image"
import Emerge from "./gatsby-images/emerge.image"
import Bitboss from "./gatsby-images/bitboss.image"
import I3p from "./gatsby-images/i3p.image"

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
    props.isRight &&
    css`
      margin-left: auto;
    `}

  &:last-of-type {
    margin-bottom: 0;
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

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 50vh;
  }
`

const Counter = styled.div`
  opacity: 0.6;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  position: absolute;
  z-index: 1;
  top: 0;
  margin-top: -7vw;

  ${props =>
    props.isRight
      ? css`
          left: 0;
          padding-left: 7vw;
        `
      : css`
          right: 0;
          padding-right: 7vw;
        `}
`

const Title = styled.div`
  text-align: ${props => (props.isRight ? "left" : "right")};
`

const ProjectPreview = ({ title, isRight, inProject, count }) => {
  const map = {
    diego: <Diego />,
    emerge: <Emerge />,
    bitboss: <Bitboss />,
    i3p: <I3p />,
  }
  return (
    <StyledLink isRight={isRight} to={`/project/${title}`}>
      <Counter isRight={isRight}>{count}</Counter>
      <Container data-scroll>{map[title]}</Container>
      <Paragraph isRight={isRight}>
        <Title>{title}</Title>
      </Paragraph>
    </StyledLink>
  )
}

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
  inProject: PropTypes.bool,
}

export default ProjectPreview
