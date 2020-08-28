import React, { useContext } from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import PropTypes from "prop-types"
import Context from "../components/context"
import { Link } from "gatsby"
import { Span } from "./ui"
import BackSVG from "../icons/back.svg"

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.fontSizes.xs};
  padding-top: ${props => props.theme.paddings.content};
  padding-left: ${props => props.theme.paddings.content};
  text-transform: lowercase;

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

const TopRight = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.xs};
  padding-top: ${props => props.theme.paddings.content};
  padding-right: ${props => props.theme.paddings.content};
  text-transform: lowercase;

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.md};
  }
`

const Switcher = styled(Span)`
  margin-left: 2vw;
  cursor: pointer;
`

const StyledSpan = styled(Span)`
  cursor: pointer;
`

const Header = ({ inProject }) => {
  const { theme, setTheme } = useContext(Context)
  return (
    <>
      <TopLeft>
        {inProject ? (
          <StyledBack to="/">
            <BackSVG />
            back
          </StyledBack>
        ) : (
          <StyledSpan
            role="button"
            tabIndex="0"
            onClick={() =>
              window.locomotiveScroll.scrollTo(
                document.getElementById("#about")
              )
            }
          >
            About
          </StyledSpan>
        )}
        <Switcher
          role="button"
          tabIndex="0"
          onClick={() =>
            setTheme(prev => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? "dark" : "light"}
        </Switcher>
      </TopLeft>
      {!inProject && (
        <TopRight
          onClick={() =>
            window.locomotiveScroll.scrollTo(
              document.getElementById("#contact")
            )
          }
        >
          <StyledSpan role="button" tabIndex="0">
            Contact
          </StyledSpan>
        </TopRight>
      )}
    </>
  )
}

Header.propTypes = {
  inProject: PropTypes.bool,
}

export default Header
