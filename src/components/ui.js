import styled, { css, keyframes } from "styled-components"
import { down } from "styled-breakpoints"

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const revealStagger = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const ContentReveal = styled.div`
  opacity: 0;
  transform: translate3d(0, 100px, 0);

  ${props =>
    props.animate &&
    css`
      animation-name: ${reveal};
      animation-duration: 1s;
      animation-timing-function: ${props.theme.transitions.bezier};
      animation-fill-mode: both;
      animation-delay: ${props =>
        props.animateAfter ? props.animateAfter : 0}ms;
    `}
`

export const StaggerReveal = styled.div`
  overflow: hidden;

  span {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  ${props =>
    props.animate &&
    css`
      span {
        animation-name: ${revealStagger};
        animation-duration: 1s;
        animation-timing-function: ${props => props.theme.transitions.bezier};
        animation-fill-mode: both;
      }
    `}
`

export const Anchor = styled.a`
  display: inline-block;
`

export const Title = styled.h1`
  user-select: none;
  margin-left: -0.5vw;
  line-height: 1;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.xxl};
  overflow: hidden;

  ${down("md")} {
    padding-top: 30vh;
  }
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: bold;
  line-height: 1;
  margin-bottom: ${props => (props.noMarginBottom ? "0" : "2.5vw")};

  ${down("md")} {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8vw;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${down("md")} {
    flex-direction: column;
    margin-bottom: 12vw;
  }
`

export const Col2 = styled.div`
  width: 20%;

  ${down("md")} {
    width: 100%;
  }
`

export const Col8 = styled.div`
  width: 80%;

  ${down("md")} {
    width: 100%;
  }
`

export const Span = styled.span`
  display: inline-block;
`
