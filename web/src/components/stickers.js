import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
      }
    }
  `)
  return (
    <div>
      {data.allSanitySticker.edges.map(({ node: item }) => (
        <Link to={`/${item.slug.current}`}>
          <img src={item.mainImage.asset.fixed.src} alt="" />
          <h2>{item.title}</h2>
          <small>{item.price}</small>
        </Link>
      ))}
    </div>
  )
}
