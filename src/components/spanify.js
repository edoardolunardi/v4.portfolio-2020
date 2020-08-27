import React from "react"
import PropTypes from "prop-types"
import { Span } from "./ui"
import styled, { css } from "styled-components"

const StyledSpan = styled(Span)`
  display: ${props => (props.block ? "block" : "inline-block")};
  ${props =>
    props.hasAnimation
      ? css`
          animation-delay: ${props.animateAfter
            ? props.animateAfter + props.delay
            : props.delay}ms;
        `
      : css`
          transition-delay: ${props.delay}ms;
        `}
`

const Spanify = ({ text, lines, hasAnimation, animateAfter }) => {
  if (text) {
    const letters = text.split("")
    return (
      <>
        {letters.map((letter, i) => (
          <StyledSpan key={i} delay={i * 55} hasAnimation={hasAnimation}>
            {letter === " " ? "\u00A0" : letter}
          </StyledSpan>
        ))}
      </>
    )
  }

  if (lines) {
    return (
      <>
        {lines.map((line, i) => (
          <StyledSpan
            key={i}
            delay={i * 70}
            block
            hasAnimation={hasAnimation}
            animateAfter={animateAfter}
          >
            {line === " " ? "\u00A0" : line}
          </StyledSpan>
        ))}
      </>
    )
  }

  return null
}

Spanify.propTypes = {
  text: PropTypes.string,
  lines: PropTypes.array,
  hasAnimation: PropTypes.bool,
  animateAfter: PropTypes.number,
}

export default Spanify
