import React, { Component } from 'react'
import Buscador from '../../components/Buscador.js/Buscador'

 class Buscar extends Component {

  constructor(props){
    super(props)
    this.state ={
      info : [],
      backup: []

    }
  }

  componentDidMount(){
    fetch()
    .then(res => res.json())
    .then(data => this.setState({
      info: data,
      backup: data,
    }))
    .catch(error => console.log(error))
  }

  render() {
    return (
        <>
      <Buscador />
      </>
    )
  }
}

export default Buscar
