import React, { useRef, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
`

const Pointer = styled.div`
  position: absolute;
  left: -20px;
  top: -20px;
  pointer-events: none;
  z-index: 100;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.text};
  transition: background-color 1s ${props => props.theme.transitions.bezier};
  opacity: 0.5;
  border-radius: 50%;
  mix-blend-mode: multiply;
`

const Cursor = () => {
  const clientX = useRef(-100)
  const clientY = useRef(-100)
  const lastX = useRef(0)
  const lastY = useRef(0)
  const cursor = useRef(null)

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b
  }

  useEffect(() => {
    const attachListener = e => {
      clientX.current = e.clientX
      clientY.current = e.clientY
    }

    const renderCursor = () => {
      lastX.current = lerp(lastX.current, clientX.current, 0.12)
      lastY.current = lerp(lastY.current, clientY.current, 0.12)
      if (cursor.current)
        cursor.current.style.transform = `translate3d(${lastX.current}px, ${lastY.current}px, 0)`
      requestAnimationFrame(renderCursor)
    }

    requestAnimationFrame(renderCursor)

    window.addEventListener("mousemove", attachListener)
    return () => window.removeEventListener("mousemove", attachListener)
  }, [])

  return (
    <Container>
      <Pointer ref={cursor} />
    </Container>
  )
}

export default Cursor
