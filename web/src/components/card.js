import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background: #33333333;
  padding: 1rem 0;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
`

const Cards = ({ children }) => {
  return <Card>{children}</Card>
}

export default Cards
