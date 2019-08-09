import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarItem = styled(Link)`
  color: #FFF;

  &:hover {
    text-decoration: none;
    color: #cfcfcf;
  }
`

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Loja</Link>

    <div>
      <ul className = 'nav navbar-nav'>
        <li>
          <NavBarItem to='/catalog/'>Catalog</NavBarItem>
        </li>
        <li>
          <NavBarItem to='/product-add/'>Adicionar Produto</NavBarItem>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header