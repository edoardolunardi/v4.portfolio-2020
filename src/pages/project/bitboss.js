import React from "react"
import Title from "../../components/ui/title"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const BitbossPage = () => {
  return (
    <>
      <SEO title="Bitboss" />
      <Title className="animation-stagger">
        <Spanify text="Bitboss" isAnimation />
      </Title>
      <ProjectPreview title="bitboss" inProject />
    </>
  )
}

export default BitbossPage
