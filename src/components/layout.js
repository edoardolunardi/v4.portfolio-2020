import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import useMediaQuery from "../hooks/useMediaQuery"
import Scroll from "../components/scroll"

const Main = styled.div`
  padding: 1vw;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
`

const Layout = ({ children, location }) => {
  const scrollContainerRef = useRef(null)
  const isMobile = useMediaQuery("md")

  return (
    <>
      <GlobalStyles />
      <Scroll container={scrollContainerRef} location={location} />
      <Main ref={scrollContainerRef}>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
