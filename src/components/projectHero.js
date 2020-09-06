import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Container = styled.div`
  width: calc(100% + 8vw);
  margin-left: -4vw;
  margin-right: -4vw;
  height: 50vw;
  position: relative;
  overflow: hidden;

  ${down("sm")} {
    height: 50vh;
  }
`

const ProjectHero = ({ image }) => {
  return (
    <Container>
      <Img fluid={image} draggable={false} className="project-image" />
    </Container>
  )
}

ProjectHero.propTypes = {
  image: PropTypes.object.isRequired,
}
export default ProjectHero
