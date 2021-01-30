import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

const style = {
  padding: "20vh 0",
  textAlign: "center"
};

export default ({ location }) => {
  return (
    <Layout>
      <SEO pagetitle="お探しのページが見つかりませんでした" pagepath={location.pathname} />
      <h1 style={style}>お探しのページが見つかりませんでした。</h1>
    </Layout>
  )
}
