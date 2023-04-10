import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    path:'/detalleAlbums'
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
            albums:[]
        
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

  componentDidMount(){
    this.traerInfo(ApiAlbums,this.seting)
  }

  traerInfo(url,callback){
    fetch(url)
        .then(res => res.json())
        .then(data => this.setState({
          // musica: this.state.musica.concat(data),
           albums: data.data,
           mas: data.info // deberia poner .next
        }, ()=> console.log(this.state.albums))) 
        .catch(err => console.log(err))
    }


  dameMas(){
    this.traerInfo(this.state.mas,this.setearData)
  }

  // foto, nombre, descripcion(ver mas / ver menos), ir al detalle, agregar/quitar de favs
  render(){
    return(
      <div>
        {
           this.state.albums.length === 0 ?
                    <p>Cargando...</p> :
                    <section className='section1'>
                      <article className='article1'>
                    <div className="character-card" >
                      {
                        this.state.albums.map( album => 
                        <h1 > {album.title }</h1>)
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
