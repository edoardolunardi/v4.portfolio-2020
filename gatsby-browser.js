import React from "react"
import Theme from "./src/components/theme"
import GlobalStyles from "./src/styles/Global"

export const wrapPageElement = ({ element }) => (
  <Theme>
    <GlobalStyles />
    {element}
  </Theme>
)
