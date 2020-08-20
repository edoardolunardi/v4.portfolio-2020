import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Span = styled.span`
  display: inline-block;
  ${props =>
    props.isAnimation
      ? css`
          animation-delay: ${props.delay}ms;
        `
      : css`
          transition-delay: ${props.delay}ms;
        `}
`

const Spanify = ({ text, lines, isAnimation }) => {
  console.log(isAnimation)
  if (text) {
    const letters = text.split("")
    return (
      <>
        {letters.map((letter, i) => (
          <Span
            key={i}
            delay={i * 70}
            isAnimation={isAnimation}
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
          <Span key={i} delay={i * 70} className="stagger">
            {line}
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
  isAnimation: PropTypes.bool,
}

export default Spanify
