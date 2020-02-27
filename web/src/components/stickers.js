import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allSanitySticker {
        edges {
          node {
            slug {
              current
            }
            title
            mainImage {
              asset {
                fixed(height: 120, width: 120) {
                  src
                }
              }
            }
            info
            _id
            price
          }
        }
      }
    }
  `)
  return (
    <Container>
      {data.allSanitySticker.edges.map(({ node: item }) => (
        <Cards>
          <h2>{item.title}</h2>
          <img src={item.mainImage.asset.fixed.src} alt="" />
          <p>{item.info}</p>
          <small>${item.price}</small>
          <button
            className="snipcart-add-item"
            data-item-id={item._id}
            data-item-price={item.price}
            data-item-image={item.mainImage.asset.fixed.src}
            data-item-name={item.title}
            data-item-url={`/${item.slug.current}`}
          >
            add to cart
          </button>
        </Cards>
      ))}
    </Container>
  )
}

const Cards = styled.div`
  background: #3b3b3b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 200px;
  display: grid;
  padding: 0 0 1rem 0;
  justify-items: center;
  /* align-items: end; */
  text-align: center;
  grid-template-rows: 1fr 140px 1fr 40px 40px;
  button {
    background: #3fc1c9;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
`

const Container = styled.div`
  justify-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
