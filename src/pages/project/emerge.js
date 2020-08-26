import React, { useContext } from "react"
import Context from "../../components/context"
import { Title, ContentReveal } from "../../components/ui"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const EmergePage = () => {
  const { showLoader } = useContext(Context)
  return (
    <>
      <SEO title="Emerge" />
      {/* <Title className={`${!showLoader && "animation-stagger"}`}>
        <Spanify text="Emerge" hasAnimation />
      </Title>
      <ContentReveal className={`${!showLoader && "animation-reveal"}`}>
        <ProjectPreview title="emerge" inProject />
      </ContentReveal> */}
    </>
  )
}

export default EmergePage
