import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BackSVG from "../icons/back.svg"

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.paddings.content};
  padding-left: ${props => props.theme.paddings.content};

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

const Name = styled.h2`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
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
      <TopLeft>
        {location.includes("project") ? (
          <StyledBack to="/">
            <BackSVG />
            Back
          </StyledBack>
        ) : (
          "2020"
        )}
      </TopLeft>
      <Name>Edoardo Lunardi</Name>
    </>
  )
}

export default Header
