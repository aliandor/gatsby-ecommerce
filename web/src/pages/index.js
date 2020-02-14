import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stickers from "../components/stickers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div>
      <Stickers />
    </div>
  </Layout>
)

export default IndexPage
