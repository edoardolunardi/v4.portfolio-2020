import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const Video = styled.video`
  opacity: ${props => (props.fade ? "1" : "0")};
  transition: opacity 1s ${props => props.theme.transitions.bezier};
`

const LazyVideo = ({ src }) => {
  const [videoSrc, setVideoSrc] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    let observer
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.3 || entry.isIntersecting) {
              setVideoSrc(src)
            }
          })
        },
        {
          rootMargin: "0px",
          threshold: 0.3,
        }
      )
      observer.observe(video)
    } else {
      setVideoSrc(src)
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(video)
      }
    }
  }, [src])

  useEffect(() => {
    if (videoSrc) {
      videoRef.current.load()
    }
  }, [videoSrc])

  return (
    <Video autoPlay muted loop playsInline ref={videoRef} fade={videoSrc}>
      <source src={videoSrc} type="video/mp4"></source>
    </Video>
  )
}

export default LazyVideo
