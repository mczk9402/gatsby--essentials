/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食事と食材を探究するサイト`,
    lang: `ja`,
    siteUrl: `https://601432cf4e272000089b1279--mczk9402-essentials.netlify.app`,
    local: `ja_JP`,
    fbappid: `xxxxxxxxxxx`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: `${__dirname}/src/images`,
       }
     },
     `gatsby-plugin-react-helmet`,
     {
       resolve: `gatsby-plugin-manifest`,
       options: {
         name: `ESSENTIALS エッセンシャル`,
         short_name: `ESSENTIALS`,
         start_url: `/`,
         background_color: `#fff`,
         theme_color: `#477294`,
         display: `standalone`,
         icon: `src/images/icon.png`
       }
     },
     `gatsby-plugin-offline`,
     {
       resolve: `gatsby-source-contentful`,
       options: {
         spaceId: process.env.CONTENTFUL_SPACE_ID,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         host: process.env.CONTENTFUL_HOST
       }
     }
  ],
}
