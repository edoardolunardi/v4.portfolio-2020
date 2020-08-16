import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { theme } from "../styles/theme"
import Spanify from "../components/spanify"

import Diego from "./diego.image"
import Emerge from "./emerge.image"
import Bitboss from "./bitboss.image"
import I3p from "./i3p.image"

const Container = styled.div`
  width: 100%;
  height: 60vw;
  position: relative;
  margin-bottom: 4vw;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  user-select: none;
  font-size: ${theme.fontSize.big};
  position: absolute;
  bottom: 0;
  margin-right: -0.3vw;
  color: ${theme.colors.white};
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
    <Container>
      {map[title]}
      <Title left={left} className="animate-stagger">
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
