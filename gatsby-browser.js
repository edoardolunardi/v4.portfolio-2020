import React from "react"
import { AppProvider } from "./src/components/context"
import Theme from "./src/components/theme"
import Layout from "./src/components/layout"
import GlobalStyles from "./src/styles/Global"

export const wrapPageElement = ({ element, props }) => (
  <AppProvider>
    <Theme>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </Theme>
  </AppProvider>
)

export const onInitialClientRender = () => {
  window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE = true
}
