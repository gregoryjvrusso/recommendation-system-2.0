import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductDiv = styled.div`
  text-align: center;
`
const StyledLink = styled(Link)`
  color: #000000;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &[data-active] {
    color: #000000;
  }

  &:hover {
    text-decoration: none;
    color: #000000;
  }
`;

const Name = styled.div`
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  line-height: 14px;
  font-size: 14px;
`

const Brand = styled.div`
  text-overflow: ellipsis;
  font-weight: 200;
  line-height: 12px;
  font-size: 12px;
  color: #696969;
`

const Price = styled.div`
  justify-content: center;
  font-size: 12px;
  color: #696969;
  text-decoration: line-through;
`

const PriceDescount = styled.div`
  justify-content: center;
  font-size: 14px;
`

const ProductCatalog = ({ name, brand, price, priceDescount, imageUrl, sku }) => (
  <ProductDiv className="col-md-4 col-sm-12" >
    <StyledLink to={'product/' + sku}>
      <div className="card">
        <img className="card-img-top" src={ imageUrl} alt="Foto do Produto" />
      </div>
      <div className="texto-produto">
        <Name>{ name }</Name>
        <Brand className="marca-produto">{ brand }</Brand>
        <Price>R$ { price }</Price>
        <PriceDescount>R$ { priceDescount }</PriceDescount>
      </div>
    </StyledLink>
  </ProductDiv>
)
    
export default ProductCatalog