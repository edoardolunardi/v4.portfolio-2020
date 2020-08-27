import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { map } from "../utils/projectImageMap"

const Container = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 50vh;
  }
`

const ProjectHero = ({ title }) => {
  return <Container>{map[title]}</Container>
}

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
}
export default ProjectHero
