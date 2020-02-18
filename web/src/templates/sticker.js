import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

export const query = graphql`
  query($slug: String!) {
    sanitySticker(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          fixed {
            src
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
      <Container>
        <Card>
          <h2>{item.title}</h2>
          <img src={item.mainImage.asset.fixed.src} alt="" />
          <p>{item.info}</p>
          <small>{item.price}</small>
          <button
            className="snipcart-add-item"
            data-item-id={item.slug}
            data-item-price={item.price}
            data-item-image={item.mainImage.asset.fixed.src}
            data-item-name={item.title}
            data-item-url={`/${item.slug.current}`}
          >
            add to cart
          </button>
        </Card>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background: #3b3b3b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  img {
    width: 100%;
    max-width: 160px;
  }
`
