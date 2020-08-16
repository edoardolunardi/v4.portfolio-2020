import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Span = styled.span`
  display: inline-block;
  transition-delay: ${props => props.delay}ms;
`

const Spanify = ({ text, lines }) => {
  if (text) {
    const letters = text.split("")
    return (
      <>
        {letters.map((letter, i) => (
          <Span key={i} delay={i * 70} className="stagger">
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
}

export default Spanify
