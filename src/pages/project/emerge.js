import React from "react"
import styled from "styled-components"
import Title from "../../components/ui/title"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const EmergePage = () => {
  return (
    <>
      <SEO title="Emerge" />
      <Title className="animation-stagger">
        <Spanify text="Emerge" isAnimation />
      </Title>
      <ProjectPreview title="emerge" inProject />
    </>
  )
}

export default EmergePage
