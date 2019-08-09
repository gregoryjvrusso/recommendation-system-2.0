import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import CatalogPage from '../Views/CatalogPage'
import FormPage from '../Views/FormPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/catalog/' component={ CatalogPage } />
      <Route exact path='/product/:sku' />
      <Route exact path='/product-add/' component={ FormPage } />
    </BrowserRouter>
  )
}

export default App;
