import React, { Component } from 'react'

class DetalleElemento extends Component {

  constructor(props){
    super(props)
    this.state={
      id: props.match.params.id,
      detalle: ''
    }
  }

  componentDidMount(){
    //ACA FALTA LA API
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums/${this.state.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      detalle:data
    }))
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <>
            <h1>Detalle</h1>
            {
                this.state.detalle === '' ?
                <h1>Cargando detalle</h1>
                :
                <h2>{this.state.detalle.name}</h2>
            }
        </>
    )
  }
}

export default DetalleElemento
