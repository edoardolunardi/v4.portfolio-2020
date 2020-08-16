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
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.isabelline};
    color: ${theme.colors.black};
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: normal;
  }

  .project-image {
    height: 100%;
  }

  a {
    color: ${theme.colors.black};
    text-transform: uppercase;
  }

  span {
    text-transform: uppercase;
  }

  .animate {
    transform: translateY(100px);
    opacity: 0;
    transition: transform 1s ${theme.transitions.bezier},
    opacity 1s ${theme.transitions.bezier};
  }

  .animate.visible {
    transform: translateY(0);
    opacity: 1;
  }
`
