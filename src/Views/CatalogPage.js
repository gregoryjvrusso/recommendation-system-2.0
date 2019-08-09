import React from 'react'
import ProductCatalog from '../Components/ProductCatalog';

const ProductsJson = [
  {
    "sku": "49",
    "name": "Brasil",
    "brand": "Camisa do Brasil",
    "price": "210,00",
    "priceDescount": "205,00",
  }, {
    "sku": "2",
    "name": "Palmeiras",
    "brand": "Camisa do Palmeiras",
    "price": "250,00",
    "priceDescount": "200,00",
  }
]

const Products = () => {
  const products = ProductsJson.map((product, index) => {
    return (
      <ProductCatalog key={index}
        sku={product.sku}
        name={product.name}
        brand={product.brand}
        price={product.price}
        priceDescount={product.priceDescount}
        imageUrl=''
      />
    )
  })

  return (
    <React.Fragment>
      {products}
    </React.Fragment>
  )
}

const CatalogPage = () => (
  <div className='container'>
    <Products />
  </div>
)

export default CatalogPage