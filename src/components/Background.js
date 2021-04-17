import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Background = ({ children, image, styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
      <MyBackgroundImage
        Tag="div"
        fluid={ image || fluid }
        preserveStackingContext={true}
        className={styleClass}
      >
        {children}
      </MyBackgroundImage>
  )
}

const MyBackgroundImage = styled(BackgroundImage)`
  min-height: 100vh;
  width: 100%;

  &.banner {
    min-height: 35vh;
    display: grid;
    padding: 10rem 0;
    place-items: center;
  }
`

const query = graphql`
  {
    file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Background
