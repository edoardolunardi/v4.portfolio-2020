import React, { useContext } from "react"
import Context from "../../components/context"
import {
  Title,
  ContentReveal,
  VideoContainer,
  VideoWrapper,
} from "../../components/ui"
import LazyVideo from "../../components/lazyVideo"

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
  const { showLoader } = useContext(Context)
  return (
    <>
      <SEO title="Diego Ravier" />
      <Title className={`${!showLoader && "animation-stagger"}`}>
        <Spanify text="Diego Ravier" hasAnimation />
      </Title>
      <ContentReveal className={`${!showLoader && "animation-reveal"}`}>
        <ProjectPreview title="diego" inProject />
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={homeVideo} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={menuVideo} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery2} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery3} />
          </VideoWrapper>
        </VideoContainer>
        <VideoContainer>
          <VideoWrapper>
            <LazyVideo src={gallery4} />
          </VideoWrapper>
        </VideoContainer>
      </ContentReveal>
    </>
  )
}

export default DiegoPage
