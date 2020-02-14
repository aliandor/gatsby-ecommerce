import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($Current: String) {
    sanitySticker(slug: { current: { eq: $Current } }) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          source {
            url
          }
        }
      }
      info
      id
      price
    }
  }
`

// add rest of sticker info ans style

export default ({ data }) => {
  const item = data.sanitySticker
  return (
    <Layout>
      <div>
        <h2>{item.title}</h2>
      </div>
    </Layout>
  )
}
