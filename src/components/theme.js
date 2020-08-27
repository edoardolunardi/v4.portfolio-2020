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
    black: "#1A1A21",
    accent: "#AC3838",
    grey: "#CCCCCC",
  },

  transitions: {
    bezierStagger: "cubic-bezier(0.15, 0.85, 0.45, 1);",
    bezierLoading: "cubic-bezier(0.76, 0, 0.24, 1);",
  },

  fontSizes: {
    xs: "1.6vw",
    sm: "2.7vw",
    md: "5vw",
    lg: "7vw",
    xl: "10.5vw",
    xxl: "21vw",
  },

  paddings: {
    content: "4vw",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
