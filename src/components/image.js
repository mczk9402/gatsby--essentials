import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

export default props => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1920) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
  <Img
    fluid={allImageSharp.nodes.find(n => n.fluid.originalName === props.filename).fluid}
    alt={props.alt}
    className={props.className}
    style={props.style}
    loading="eager"
    durationFadeIn={100}
  />
  )
}
