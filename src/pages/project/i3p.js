import React from "react"
import Title from "../../components/ui/title"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const I3p = () => {
  return (
    <>
      <SEO title="I3p" />
      <Title className="animation-stagger">
        <Spanify text="I3p" isAnimation />
      </Title>
      <ProjectPreview title="i3p" inProject />
    </>
  )
}

export default I3p
