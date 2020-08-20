import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import "locomotive-scroll/dist/locomotive-scroll.min.css"
import FG from "../fonts/FG-medium.woff"

export default createGlobalStyle`
  @font-face {
    font-family: FG;
    src: url(${FG}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @keyframes animate-stagger {
      from {
        transform: translate3d(0, 100px, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
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
    transform: scale(1.66667);
  }

  a {
    color: ${props => props.theme.colors.black};
    text-transform: uppercase;
  }

  span {
    text-transform: uppercase;
  }

  .transition-stagger {
      overflow: hidden;
      > span {
          transform: translate3d(0, 100px, 0);
          opacity: 0;
          transition-property: transform, opacity;
          transition-duration: 1s;
          transition-timing-function: ${props =>
            props.theme.transitions.bezier};

          @media screen and (max-width: ${props =>
            props.theme.breakpoints.md}px){
            transform: translate3d(0, 50px, 0);
          }
      }
  }

  .transition-stagger.visible > span {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .animation-stagger {
      overflow: hidden;
      > span {
          animation-name: animate-stagger;
          animation-duration: 1s;
          animation-timing-function: ${props => props.theme.transitions.bezier};
          animation-fill-mode: both;
      }
  }
`
