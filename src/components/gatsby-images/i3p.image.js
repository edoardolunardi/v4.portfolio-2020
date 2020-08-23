import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const I3p = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "i3p.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      draggable={false}
      className="project-image"
    />
  )
}

export default I3p
