import React, { Component } from 'react'

class DetalleElemento extends Component {

  constructor(props){
    super(props)
    this.state={
      id:this.props.match.params.id,
      detalle: ' '
    }
  }

  componentDidMount(){
    //ACA FALTA LA API
    fetch(`api/ ${this.state.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      detalle:data
    }))
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        {
          this.state.detalle === ' ' ?
          <h1>Cargando ... </h1>:
          <div>
            <img src={this.state.detalle.image} />
            <h1>{this.state.detallle.name}</h1>
          </div>
        }
      </div>
    )
  }
}

export default DetalleElemento
