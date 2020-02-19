import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stickers from "../components/stickers"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Home" />
      <h2>Stickers for every developer</h2>
      <div>
        <Stickers />
      </div>
    </Wrapper>
  </Layout>
)

export default IndexPage

const Wrapper = styled.div`
  padding: 1rem;
  h2 {
    text-align: center;
  }
`
