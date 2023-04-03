// tiene que tener un loader Cargando ... 

import React, { Component } from 'react'

 class Buscar extends Component {

    constructor(props){
        super(props)
        this.state={

            valorInput :' ',

        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> console.log(`Este es el estado que se ve el setstate extendido ${this.state.valorInput}`))
    }

    metodoQueEnvia(event){
        console.log(event)
    }


  render() {
    return (
      <form onSubmit={(event)=> this.evitarSubmit(event)}>
          <div>
              <label>Busca lo que quieras</label>
          </div>
          <div>
              <input onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput} />
          </div>
          <button onClick={(event)=> this.metodoQueEnvia(event)}>Enviar consulta</button>
    
        </form>
    )
  }
}

export default Buscar
