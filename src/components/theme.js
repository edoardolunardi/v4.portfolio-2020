import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  breakpoints: {
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1199.98,
  },

  colors: {
    isabelline: "#F6F5F1",
    white: "#FFFFFF",
    black: "#000000",
  },

  transitions: {
    bezier: "cubic-bezier(0.15, 0.85, 0.45, 1);",
  },

  fontSizes: {
    small: "1.6vw",
    base: "4vw",
    medium: "7vw",
    big: "13.250vw",
  },

  paddings: {
    content: "1vw",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
