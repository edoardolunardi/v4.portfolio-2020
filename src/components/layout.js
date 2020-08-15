import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/Global"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  //   const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
