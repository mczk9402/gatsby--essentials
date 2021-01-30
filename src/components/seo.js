import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ pagetitle, pagedesc, pagepath, pageimg, pageimgw, pageimgh,}) => {
  const { site: {siteMetadata}, } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          lang
          siteUrl
          fbappid
          local
        }
      }
    }
  `)

  const title = pagetitle
    ? `${pagetitle} | ${siteMetadata.title}`
    : siteMetadata.title

  const description = description || siteMetadata.description

  const url = pagepath
    ? `${siteMetadata.siteUrl}${pagepath}`
    : siteMetadata.siteUrl

  const imgurl = pageimg
    ? `${siteMetadata.siteUrl}${pageimg}`
    : `${siteMetadata.siteUrl}/thumbnail.jpg`

  const imgw = imgw || 1280

  const imgh = imgh || 640

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{title}</title>
      <meta name="discription" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="og:local" content={siteMetadata.local} />
      <meta property="og:app_id" content={siteMetadata.fbappid} />

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
