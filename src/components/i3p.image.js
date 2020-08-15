import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const I3p = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "i3p.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="animate-image"
    />
  )
}

export default I3p
