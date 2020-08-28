import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Container = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  overflow: hidden;

  ${down("md")} {
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
