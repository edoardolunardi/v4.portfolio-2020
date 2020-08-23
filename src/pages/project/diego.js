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
import menuVideo from "../../projects-media/diego/menu.mp4"
import gallery from "../../projects-media/diego/gallery.mp4"
import gallery2 from "../../projects-media/diego/gallery2.mp4"
import gallery3 from "../../projects-media/diego/gallery3.mp4"
import gallery4 from "../../projects-media/diego/gallery4.mp4"

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
      <VideoContainer>
        <VideoWrapper>
          <Video src={menuVideo} />
        </VideoWrapper>
      </VideoContainer>
      <VideoContainer>
        <VideoWrapper>
          <Video src={gallery} />
        </VideoWrapper>
      </VideoContainer>
      <VideoContainer>
        <VideoWrapper>
          <Video src={gallery2} />
        </VideoWrapper>
      </VideoContainer>
      <VideoContainer>
        <VideoWrapper>
          <Video src={gallery3} />
        </VideoWrapper>
      </VideoContainer>
      <VideoContainer>
        <VideoWrapper>
          <Video src={gallery4} />
        </VideoWrapper>
      </VideoContainer>
    </>
  )
}

export default DiegoPage
