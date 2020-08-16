import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import useMediaQuery from "../hooks/useMediaQuery"
import { isChrome, isFirefox, isSafari } from "react-device-detect"
import Scroll from "../components/scroll"
import ChangeBrowser from "../components/changeBrowser"
import { theme } from "../styles/theme"

const Main = styled.main`
  padding: ${theme.padding.content};
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`

const Layout = ({ children, location }) => {
  const isMobile = useMediaQuery("md")

  return (
    <>
      <GlobalStyles />
      {!isChrome && !isFirefox && !isSafari ? (
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
