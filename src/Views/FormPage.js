import React from 'react'
import Form from '../Components/Form'
import styled from 'styled-components'

const Titulo = styled.p`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 22px;
  text-align: center;
`

const FormPage = () => (
  <div className='container'>
    <Titulo>Adicionar Produto</Titulo>
    <Form />
  </div>
)

export default FormPage