import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(sort: {order: DESC, fields: publishDate}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          eyecatch {
            description
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ({ data, location, pageContext, }) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="ESSENTIALSのブログです"
      pagepath={location.pathname}
    />
    <section className="content bloglist">
      <div className="container">
        <h1 className="bar">RECENT POSTS</h1>
        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article className="post" key={node.id}>
              <Link to={`post/${node.slug}`}>
                <figure>
                  <Img fluid={node.eyecatch.fluid} alt={node.eyecatch.description} style={{ height: "100%" }} />
                </figure>
                <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>
        <ul className="pagenation">
          <li className="prev">
            <Link className="prev" rel="prev" to={pageContext.currentPage === 2 ? `/blog/` : `/blog/${pageContext.currentPage - 1}/`}>
              <FontAwesomeIcon icon={faChevronLeft}/>
              <span>前のページ</span>
            </Link>
          </li>
          <li className="next">
            <Link className="next" rel="next" to={`/blog/${pageContext.currentPage + 1}/`}>
               <span>次のページ</span>
              <FontAwesomeIcon icon={faChevronRight}/>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)
