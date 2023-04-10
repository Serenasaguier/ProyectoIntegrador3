import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ApiAlbums = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums'

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
            clase:'hidden'
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
      musica: this.state.musica.concat(data),
      mas: data.info // deberia poner .next
    }))
    .catch(error => console.log(error))
  }

  dameMas(){
    this.traerInfo(this.state.mas,this.setearData)
  }

  // foto, nombre, descripcion(ver mas / ver menos), ir al detalle, agregar/quitar de favs
  render(){
    return(
      <div>
        {
           this.state.musica.length === 0 ?
                    <p>Cargando...</p> :
                    <section className='section1'>
                      <article className='article1'>
                    <div className="character-card" >
                        <h3 className='canciones'>
                            {
                                this.state.musica.map(musica => <li>{musica.title}</li>)
                            }
                        </h3>
                        <h4>album copeee</h4>
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
