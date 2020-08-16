import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import FG from "../fonts/FG-medium.woff"
import { theme } from "./theme"

export default createGlobalStyle`
  @font-face {
    font-family: FG;
    src: url(${FG}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  ${normalize}

  html {
    font-family: FG, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    height: 100%;
    user-select: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.isabelline};
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    text-transform: uppercase;
    font-weight: normal;
  }

  .animate-image {
    height: 100%;
  }
`
