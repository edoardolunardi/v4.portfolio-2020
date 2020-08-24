import React, { useContext } from "react"
import Context from "../../components/context"
import { Title, ContentReveal } from "../../components/ui"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const I3p = () => {
  const { showLoader } = useContext(Context)
  return (
    <>
      <SEO title="I3p" />
      <Title className={`${!showLoader && "animation-stagger"}`}>
        <Spanify text="I3p" hasAnimation />
      </Title>
      <ContentReveal className={`${!showLoader && "animation-reveal"}`}>
        <ProjectPreview title="i3p" inProject />
      </ContentReveal>
    </>
  )
}

export default I3p
