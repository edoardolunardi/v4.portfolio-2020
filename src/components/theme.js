import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import Context from "../components/context"

const light = {
  colors: {
    body: "#F6F5F1",
    text: "#1A1A21",
  },
}

const dark = {
  colors: {
    body: "#1A1A21",
    text: "#F6F5F1",
  },
}

const defaultTheme = {
  breakpoints: {
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1199.98,
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

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }

const Theme = ({ children }) => {
  const { theme } = useContext(Context)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
