import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CardCanciones.css'

const mas = [    
    {
      nombre: 'Ir al detalle',
      path:`/DetalleTracks`
    }
  ]

class CardCanciones extends Component{

    constructor(props){
        super(props)
        this.state={
            texto:'Ver mas',
            clase:'hidden',
            data:props.info,
            albums:[],
            mas:''
        }
    }


    cambiarTexto(){
        if(this.state.texto === 'Ver mas'){
            this.setState({
                texto: 'Ver menos',
                clase: 'show'
            })
        } else {
            this.setState({
                texto: 'Ver mas',
                clase:'hidden'
            })
        }
    }


    render(){
    return (
      <div className="article1">
          <div className='contenedorfoto'>
          <img src={this.props.info.artist.picture} alt='imagen'/>
          </div>
          <h3 className='canciones'>{this.props.info.title}</h3>
          <h4> </h4>
          <div className='canciones'>
          {mas.map((extra, idx) => (
          <h3 className="canciones">
            <Link to={`/DetalleTracks/${this.props.info.id}`}> {extra.nombre}</Link>
          </h3>
        ))}
        <p className={this.state.clase}>Duracion : {this.props.info.duration}</p>
        <h3 className='canciones'>
        <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a></h3>
        </div>
      </div>
      
        )
}
}

export default CardCanciones 

  


  

