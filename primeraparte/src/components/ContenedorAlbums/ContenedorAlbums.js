import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums'
const url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=9'

console.log(ApiAlbums)

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

class ContenedorAlbums extends Component {
    constructor(props){
        super(props)
        this.state={
            musica: [],
            load: true,
            mas:' ',
            texto:'Ver mas',
            clase:'hidden',
            data:props.info,
            albums:[],
        
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


  dameMas(){
    this.traerInfo(this.state.mas,this.setearData)
  }

  // foto, nombre, descripcion(ver mas / ver menos), ir al detalle, agregar/quitar de favs
  render(){
    return(
      <div>
        
        {
           this.props.data.length === 0 ?
                    <p>Cargando...</p> :
                    <section className='section1'>
                     
                      <article className='article1'>
                    <div className="character-card" >
                      {
                        this.props.data.map(album =>
                        <Card info={album} />)
                      }
                        {
                          mas.map((extra,idx)=><a>
                            <Link to={extra.path}> {extra.nombre}</Link>
                          </a>)
                        }
                        <p className={this.state.clase}>funcionaaaaaaa</p>
                        <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a>
                    </div>
                    </article>
                    </section>
         }
      </div>
    )
  }

}

export default ContenedorAlbums
