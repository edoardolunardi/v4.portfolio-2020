import React from "react"
import styled from "styled-components"
import Title from "../../components/ui/title"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const DiegoPage = () => {
  return (
    <>
      <SEO title="Diego Ravier" />
      <Title className="animation-stagger">
        <Spanify text="Diego Ravier" isAnimation />
      </Title>
      <ProjectPreview title="diego" inProject />
    </>
  )
}

export default DiegoPage
