
// secciones de albumes, artistas y canciones
import React, { Component } from 'react'
import SeccionPadre from '../SeccionPadre/SeccionPadre'

export default class ContenedorElemento extends Component {
  render() {
    return (
         <section> 
             <SeccionPadre seccionPadre="Albums"/>
             <SeccionPadre seccionPadre="Artists"/>
             <SeccionPadre seccionPadre="Canciones"/>
        </section>
    )
  }
}
