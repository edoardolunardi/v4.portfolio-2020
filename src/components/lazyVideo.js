import React, { useState, useEffect, useRef } from "react"

const LazyVideo = ({ src }) => {
  const [videoSrc, setVideoSrc] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    let observer
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            setVideoSrc(src)
          }
        })
      })
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
    <video autoPlay muted loop playsInline ref={videoRef}>
      <source src={videoSrc} type="video/mp4"></source>
    </video>
  )
}

export default LazyVideo
