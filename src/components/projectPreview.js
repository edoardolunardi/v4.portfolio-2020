import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Spanify from "../components/spanify"

import Diego from "./project-image/diego.image"
import Emerge from "./project-image/emerge.image"
import Bitboss from "./project-image/bitboss.image"
import I3p from "./project-image/i3p.image"

const Container = styled.div`
  width: 100%;
  height: 60vw;
  position: relative;
  margin-bottom: 4vw;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 50vh;
  }
`

const Title = styled.h2`
  user-select: none;
  font-size: ${props => props.theme.fontSizes.big};
  position: absolute;
  bottom: 0;
  margin-right: -0.3vw;
  color: ${props => props.theme.colors.white};
  z-index: 10;
  line-height: 0.7;
  ${props =>
    props.left
      ? css`
          left: 0;
          margin-left: -0.5vw;
        `
      : css`
          right: 0;
        `}
`

const ProjectPreview = ({ title, left }) => {
  const map = {
    diego: <Diego />,
    emerge: <Emerge />,
    bitboss: <Bitboss />,
    i3p: <I3p />,
  }

  return (
    <Container data-scroll>
      {map[title]}
      <Title left={left} data-scroll className="transition-stagger">
        <Spanify text={title} />
      </Title>
    </Container>
  )
}

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.bool,
}

export default ProjectPreview
