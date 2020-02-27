import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Icon from "../images/Vector.png"

const Header = () => (
  <header>
    <Wrapper>
      <h1>
        <Link to="/">
          <span>Sticker</span>Dev
        </Link>
      </h1>
      <Cart className="snipcart-checkout">
        <img src={Icon} alt="cart icon" />
        <span className="snipcart-items-count" />
      </Cart>
    </Wrapper>
  </header>
)
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* border: 2px solid tomato; */
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  img {
    width: 32px;
    height: 32px;
  }
  h1 {
    a {
      color: #fff;
      font-weight: 500;
      span {
        color: #3fc1c9;
      }
    }
  }
`

const Cart = styled.button`
  background: none;
  border: none;
  color: #fff;
  padding-right: 1rem;
  position: fixed;
  right: 1rem;
  img {
    width: 32px;
  }
  span {
    /* background: tomato; */
    color: #3fc1c9;
    padding: 0.15rem;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    transform: translateY(-6px) translateX(6px);
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
