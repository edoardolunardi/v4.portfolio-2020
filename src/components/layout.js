import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import useSmoothScroll from "../hooks/useSmoothScroll"

const Main = styled.div`
  position: fixed;
  padding: 1vw;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
`

const Layout = ({ children }) => {
  const scrollContainerRef = useRef(null)
  useSmoothScroll(scrollContainerRef, true)

  return (
    <>
      <GlobalStyles />
      <Main ref={scrollContainerRef}>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
