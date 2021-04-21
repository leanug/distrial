import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { site: { info } } = useStaticQuery( query )

  const {
    siteDesc,
    image,
    siteUrl,
    siteTitle,
  } = info

  return (
    <Helmet>
      <title>{ `${ title } | ${ siteTitle }` }</title>
      <meta name="description" content={ description || siteDesc } /> {/* fallback description */}
      <html lang="en" />
      <meta name="image" content={image} />
      {/* Twitter Cards */}
      <meta name="twiter:card" content="summary_large_image" />
      <meta name="twiter:title" content={ siteTitle } />
      <meta name="twiter:description" content={ siteDesc } />
      <meta name="twiter:image" content={ `${ siteUrl }${ image }` } />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      info: siteMetadata {
        siteDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}