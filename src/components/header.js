import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BackSVG from "../icons/back.svg"

const About = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.paddings.content};
  padding-left: ${props => props.theme.paddings.content};
  text-transform: lowercase;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`

const StyledBack = styled(Link)`
  display: inline-flex;
  align-items: center;

  > svg {
    width: 1.5vw;
    margin-right: 5px;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
      width: 4.5vw;
    }
  }
`

const Contact = styled.h2`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  text-transform: lowercase;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.paddings.content};
  padding-right: ${props => props.theme.paddings.content};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`

const Header = ({ location }) => {
  return (
    <>
      <About>About</About>
      <Contact>Contact</Contact>
    </>
  )
}

export default Header
