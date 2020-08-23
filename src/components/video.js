import React from "react"

const Video = ({ src }) => {
  return (
    <video autoPlay muted loop playsInline className="lazy">
      <source data-src={src} type="video/mp4"></source>
    </video>
  )
}

export default Video
