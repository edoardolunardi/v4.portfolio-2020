import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import BackSVG from "../icons/back.svg"

const About = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.fontSizes.xs};
  padding-top: ${props => props.theme.paddings.content};
  padding-left: ${props => props.theme.paddings.content};
  text-transform: lowercase;
  cursor: pointer;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
  }
`

const StyledBack = styled(Link)`
  display: inline-flex;
  align-items: center;

  > svg {
    width: 1.5vw;
    margin-right: 5px;

    ${down("md")} {
      width: 4.5vw;
    }
  }
`

const Contact = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.xs};
  padding-top: ${props => props.theme.paddings.content};
  padding-right: ${props => props.theme.paddings.content};
  text-transform: lowercase;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
  }
`

const Header = ({ inProject }) => {
  return (
    <>
      <About
        {...(!inProject && {
          onClick: () =>
            window.locomotiveScroll.scrollTo(document.getElementById("#about")),
        })}
      >
        {inProject ? (
          <StyledBack to="/">
            <BackSVG />
            back
          </StyledBack>
        ) : (
          "about"
        )}
      </About>
      <Contact
        onClick={() =>
          window.locomotiveScroll.scrollTo(document.getElementById("#contact"))
        }
      >
        Contact
      </Contact>
    </>
  )
}

Header.propTypes = {
  inProject: PropTypes.bool,
}

export default Header
