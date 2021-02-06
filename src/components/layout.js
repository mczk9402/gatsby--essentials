import React from 'react'
import { Helmet } from "react-helmet"
import "typeface-hanalei"
import "typeface-open-sans-condensed"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Hanalei&family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)
