import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/global"
import useMediaQuery from "../hooks/useMediaQuery"
import useBrowserDetect from "../hooks/useBrowserDetect"
import Scroll from "../components/scroll"
import ChangeBrowser from "../components/changeBrowser"

const Main = styled.main`
  padding: ${props => props.theme.paddings.content};
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`

const Layout = ({ children, location }) => {
  const isMobile = useMediaQuery("md")
  const { isValidBrowser } = useBrowserDetect()

  return (
    <>
      <GlobalStyles />
      {isValidBrowser ? (
        <>
          <Scroll location={location} />
          <Main>{children}</Main>
        </>
      ) : (
        <ChangeBrowser />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
