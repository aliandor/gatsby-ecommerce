import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ paddingLeft: "1rem" }}>
        <Link to="/" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          {siteTitle}
        </Link>
      </h1>
      <Cart href="#" className="snipcart-summary snipcart-checkout">
        <div>
          Cart <span className="snipcart-total-items"></span>
        </div>
      </Cart>
    </div>
  </header>
)
const Cart = styled.a`
  color: #fff;
  span {
    font-size: 12px;
    color: tomato;
    font-weight: bold;
    position: absolute;
    transform: translateX(6px) translateY(-6px);
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
