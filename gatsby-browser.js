import React from "react"
import Theme from "./src/components/theme"
import Layout from "./src/components/layout"
import GlobalStyles from "./src/styles/Global"

export const wrapPageElement = ({ element }) => (
  <Theme>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </Theme>
)
