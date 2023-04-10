import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const mas = [
    {
      nombre:'Ver todas',
      path:'/Albums'
    },
    {
      nombre: 'Ir al detalle',
      path:`/DetalleElemento`
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
      <article className='article1'>
          <div className='contenedorfoto'>
          <img src={this.props.info.artist.cover}/>
          </div>
          <h3 className='canciones'>{this.props.info.title}</h3>
          <h4> </h4>
          <div className='canciones'>
          {
                          mas.map((extra,idx)=><h3 className='canciones'>
                            <Link to={extra.path}> {extra.nombre}</Link>
                          </h3>)
                        }
                        <p className={this.state.clase}>descripcion</p>
                        <h3 className='canciones'>
                        <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a></h3>
                        </div>
      </article>
      
        )
}
}

export default CardCanciones 

  

