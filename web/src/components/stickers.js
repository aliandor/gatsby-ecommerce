import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import Cards from "../components/card"
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
            id
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
          <Link to={`/${item.slug.current}`}>
            <img src={item.mainImage.asset.fixed.src} alt="" />
          </Link>
          <p>{item.info}</p>
          <small>${item.price}</small>
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
  justify-content: center;
  text-align: center;
  grid-template-rows: 1fr 140px;
`

const Container = styled.div`
  justify-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
