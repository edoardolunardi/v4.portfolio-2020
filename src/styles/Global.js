import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import FG from "../fonts/FG-medium.woff"

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
    overscroll-behavior-y: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.isabelline};
    color: ${props => props.theme.colors.black};
    height: 100%;
    overflow: hidden;
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
    color: ${props => props.theme.colors.black};
    text-transform: uppercase;
  }

  span {
    text-transform: uppercase;
  }

  .animate-stagger {
      overflow: hidden;
      > span {
          transform: translateY(100px);
          opacity: 0;
          transition-property: transform, opacity;
          transition-duration: 1s;
          transition-timing-function: ${props =>
            props.theme.transitions.bezier};

          @media screen and (max-width: ${props =>
            props.theme.breakpoints.md}px){
            transform: translateY(50px);
          }
      }
  }

  .animate-stagger.visible > span {
    transform: translateY(0);
    opacity: 1;
  }
`
