import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const mas = [
    {
      nombre:'Ver todas',
      path:'/Artistas'
    },
    {
      nombre: 'Ir al detalle',
      path:`/DetalleElemento`
    }
  ]

class CardArtistas extends Component{

    constructor(props){
        super(props)
        this.state={
            texto:'Ver mas',
            clase:'hidden',
            data:props.info,
            artistas:[],
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
        console.log(this.state.data)
    return (
      <article className='article1'>
          <div className='contenedorfoto'>
          <img src={this.state.data.picture}/>
          </div>
          <h3 className='canciones'>{this.state.data.name}</h3>
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

export default CardArtistas; 
