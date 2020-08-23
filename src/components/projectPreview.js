import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Spanify from "../components/spanify"

import Diego from "./gatsby-images/diego.image"
import Emerge from "./gatsby-images/emerge.image"
import Bitboss from "./gatsby-images/bitboss.image"
import I3p from "./gatsby-images/i3p.image"

const StyledLink = styled(Link)`
  margin-bottom: 4vw;
  display: block;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Container = styled.div`
  width: 100%;
  height: 60vw;
  position: relative;
  overflow: hidden;

  @keyframes scale {
      from {
          transform: scale(1.3);
      }
      to {
          transform: scale(1.66667)
      }
  }

  ${props =>
    props.animateScale &&
    css`
      .project-image {
        animation: scale 1s ${props.theme.transitions.bezier};
      }
    `}

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 50vh;
  }
`

const Title = styled.h2`
  user-select: none;
  font-size: ${props => props.theme.fontSizes.big};
  position: absolute;
  bottom: 0;
  margin-bottom: -0.3vw;
  color: ${props => props.theme.colors.white};
  z-index: 10;
  line-height: 1;
  will-change: transform;
  ${props =>
    props.left
      ? css`
          left: 0;
          margin-left: 0.7vw;
        `
      : css`
          right: 0;
          margin-right: 0.7vw;
        `}
`

const ProjectPreview = ({ title, left, inProject }) => {
  const map = {
    diego: <Diego />,
    emerge: <Emerge />,
    bitboss: <Bitboss />,
    i3p: <I3p />,
  }

  return inProject ? (
    <Container data-scroll animateScale>
      {map[title]}
    </Container>
  ) : (
    <StyledLink to={`/project/${title}`}>
      <Container data-scroll>
        {map[title]}
        <Title
          left={left}
          data-scroll
          data-scroll-offset="20%"
          className="transition-stagger"
        >
          <Spanify text={title} />
        </Title>
      </Container>
    </StyledLink>
  )
}

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.bool,
  inProject: PropTypes.bool,
}

export default ProjectPreview
