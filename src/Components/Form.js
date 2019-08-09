import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      name: '',
      brand: '',
      price: '',
      priceDescount: ''
    }

    this.state = this.stateInicial;
  }

  onChangeInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    })
  }

  render(){
    const { name, brand, price, priceDescount } = this.state;

    return (
      <form>
        <div className = 'form-group row'>
          <label 
            htmlFor = 'nameProduct' 
            className = 'col-sm-2 col-form-label'
          > Nome </label>
          <div className="col-md-6 col-sm-10">
            <input 
              type = 'text' 
              className = 'form-control' 
              id = 'nameProduct' 
              value = { name }
              onChange = { this.onChangeInput }
            />
          </div>
        </div>
        
        <div className = 'form-group row'>
          <label 
            htmlFor = 'brandProduct' 
            className = 'col-sm-2 col-form-label'
            >
              Marca
            </label>
          <div className = "col-md-6 col-sm-10">
            <input 
              type = 'text'  
              className = 'form-control' 
              id = 'brandProduct'
              value = { brand } 
              onChange = { this.onChangeInput }
            />
          </div>
        </div>

        <div className = 'form-group row'>
          <label 
            htmlFor = 'priceProduct' 
            className = 'col-sm-2 col-form-label'
          >
            Valor Original
          </label>
          <div className = "col-md-6 col-sm-10">
            <input 
              type = 'text' 
              className = 'form-control' 
              id = 'priceProduct'
              value = { price }
              onChange = { this.onChangeInput }
            />
          </div>
        </div>

        <div className = 'form-group row'>
          <label 
            htmlFor = 'priceDescountProduct' 
            className = 'col-sm-2 col-form-label'
          >
            Valor com Desconto
          </label>
          <div className = "col-md-6 col-sm-10">
            <input 
              type = 'text' 
              className = 'form-control' 
              id = 'priceDescountProduct' 
              value = { priceDescount }
              onChange = { this.onChangeInput }
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    )
  }
}
      
export default Form