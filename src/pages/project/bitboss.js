import React, { useContext } from "react"
import Context from "../../components/context"
import { Title, ContentReveal } from "../../components/ui"

import SEO from "../../components/seo"
import Spanify from "../../components/spanify"
import ProjectPreview from "../../components/projectPreview"

const BitbossPage = () => {
  const { showLoader } = useContext(Context)
  return (
    <>
      <SEO title="Bitboss" />
      {/* <Title className={`${!showLoader && "animation-stagger"}`}>
        <Spanify text="Bitboss" hasAnimation />
      </Title>
      <ContentReveal className={`${!showLoader && "animation-reveal"}`}>
        <ProjectPreview title="bitboss" inProject />
      </ContentReveal> */}
    </>
  )
}

export default BitbossPage
