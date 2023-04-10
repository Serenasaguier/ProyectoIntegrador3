// tiene que tener un loader Cargando ... 

import React, { Component } from 'react'
import NotFound from '../../screens/NotFound/NotFound';

 class Buscador extends Component {

    constructor(props){
        super(props)
        this.state={
            valorInput :' ',
            enviar: '',
            resultadosBusqueda:' '
        }
    }

    buscador(event){
        event.preventDefault();
        if (this.state.valorInput === ' ') {
            this.setState({
                enviar: ' No escribiste nada'
            })
        } else {
            fetch(`
            https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.valorInput}`)
            .then(res=> res.json())
            .then(data=>{
                this.setState({
                    resultadosBusqueda: data.results
                });
                if (data.results.length === 0 ) {
                    this.setState({
                       enviar: <NotFound/>
                    })
                }
            })
            .catch(error=> console.log(error))
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value,
            mensaje: '',
            resultadosBusqueda: []
        },
        ()=> console.log(`Este es el estado que se ve el setstate extendido ${this.state.valorInput}`))
    }

    metodoQueEnvia(event){
        console.log(event)
    }


  render() {
    return (
        <>
        <nav className=''>
        <div className='navbuscador formulario'>
        <form class="buscador navbuscador" onSubmit={(event)=> this.buscador(event)} >
                <input type="text" placeholder="Búsqueda" className="search buscar" onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput} />
                <button type="submit" onClick={(event)=> this.metodoQueEnvia(event)}> Search</button>
            </form> 
        </div>
        <p>{this.state.mensaje}</p>
        </nav>
        </>
    )
  }
}

export default Buscador
