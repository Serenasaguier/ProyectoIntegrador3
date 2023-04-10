import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const mas = [
    { //nombre:'Ver todas', path:'/Albums'
    },
    {
      nombre: 'Ir al detalle',
      path:`/DetalleElemento`
    }
  ]

class Card extends Component{

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
          <img src={this.props.info.cover}></img>
          </div>
          <h3 className='canciones'>{this.props.info.title}</h3>
          <h4> </h4>
          {
           
                          mas.map((extra,idx)=><h3 className='canciones'>
                            {console.log(this.props.info)}
                            <Link to={'album/' +  this.props.info.id}> {extra.nombre}</Link>
                          </h3>)
                        }
                        <p className={this.state.clase}>descripcion</p>
                        <h3 className='canciones'>
                        <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a></h3>
                        
      </article>
      
        )
}
}

export default Card 

  

