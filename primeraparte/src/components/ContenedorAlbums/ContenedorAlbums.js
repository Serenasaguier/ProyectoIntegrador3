import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/'

const API = 'https://rickandmortyapi.com/api/character'


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
                    <div className="character-card" >
                        <ul>
                            {
                                this.state.musica.map(musica => <li>{musica.name}</li>)
                            }
                        </ul>
                        <h4>album copeee</h4>
                        <p className={this.state.clase}>funcionaaaaaaa</p>
                        <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a>
                        
                    </div>
         }
      </div>
    )
  }

}

export default ContenedorAlbums
