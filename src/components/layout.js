import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import useMediaQuery from "../hooks/useMediaQuery"
import { isChrome, isFirefox } from "react-device-detect"
import Scroll from "../components/scroll"
import ChangeBrowser from "../components/changeBrowser"

const Main = styled.main`
  padding: 1vw;
  width: 100%;
  box-sizing: border-box;
`

const Layout = ({ children, location }) => {
  const isMobile = useMediaQuery("md")

  return (
    <>
      <GlobalStyles />
      {!isChrome && !isFirefox ? (
        <ChangeBrowser />
      ) : (
        <>
          <Scroll location={location} />
          <Main>{children}</Main>
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
