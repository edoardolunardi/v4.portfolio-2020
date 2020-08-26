import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Span = styled.span`
  display: ${props => (props.block ? "block" : "inline-block")};
  ${props =>
    props.hasAnimation
      ? css`
          animation-delay: ${props.delay}ms;
        `
      : css`
          transition-delay: ${props.delay}ms;
        `}
`

const Spanify = ({ text, lines, hasAnimation }) => {
  if (text) {
    const letters = text.split("")
    return (
      <>
        {letters.map((letter, i) => (
          <Span
            key={i}
            delay={i * 55}
            hasAnimation={hasAnimation}
            className="stagger"
          >
            {letter === " " ? "\u00A0" : letter}
          </Span>
        ))}
      </>
    )
  }

  if (lines) {
    return (
      <>
        {lines.map((line, i) => (
          <Span key={i} delay={i * 70} block className="stagger">
            {line === " " ? "\u00A0" : line}
          </Span>
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
}

export default Spanify
