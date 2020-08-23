import React from "react"
import Title from "../../components/ui/title"
import {
  VideoContainer,
  VideoWrapper,
} from "../../components/ui/videoContainer"
import Video from "../../components/video"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

// Media
import homeVideo from "../../projects-media/diego/home.mp4"

const DiegoPage = () => {
  return (
    <>
      <SEO title="Diego Ravier" />
      <Title className="animation-stagger">
        <Spanify text="Diego Ravier" isAnimation />
      </Title>
      <ProjectPreview title="diego" inProject />
      <VideoContainer>
        <VideoWrapper>
          <Video src={homeVideo} />
        </VideoWrapper>
      </VideoContainer>
    </>
  )
}

export default DiegoPage
