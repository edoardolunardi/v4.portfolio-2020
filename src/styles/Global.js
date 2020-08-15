import * as styled from "styled-components"
import { normalize } from "styled-normalize"
import FG from "../fonts/FG-medium.woff"

export default styled.createGlobalStyle`
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
    overscroll-behavior-y: none;
    overflow-x: hidden;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  .gatsby-image-wrapper {
    height: 100%;
  }
`
