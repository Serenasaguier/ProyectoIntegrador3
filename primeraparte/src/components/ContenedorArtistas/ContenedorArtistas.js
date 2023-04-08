import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ApiArtistas = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/'
let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart'

const API = 'https://rickandmortyapi.com/api/character'

 class ContenedorArtistas extends Component {

    constructor(props){
        super(props)
        this.state={
            musica: [],
            load: true,
             mas:' ',
             Key: ' '
        }
    }
    
    componentDidMount(){
        this.traerInfo(ApiArtistas,this.seting)
      }
    
      traerInfo(url,callback){
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({
          musica: this.state.musica.concat(data),
          mas: data.info.next
        }))
        .catch(error => console.log(error))
      }
    
      dameMas(){
        this.traerInfo(this.state.mas,this.setearData)
      }
    
      render(){
        return(
          <div>
            {
                        this.state.musica.length === 0 ?
                        <p>Cargando...</p> :
                        <div>
                            <ul>
                                {
                                    this.state.musica.map(musica => <li>{musica.name}</li>)
                                }
                            </ul>
                            <button onClick={()=> this.dameMas()}>Traer mas Artistas</button>
                        </div>
                    }
          </div>
        )
      }
}

export default ContenedorArtistas