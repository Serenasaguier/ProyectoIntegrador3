import React, { Component } from 'react'
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums'
import ContenedorArtistas from '../../components/ContenedorArtistas/ContenedorArtistas'


const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums'
const searchEndpoint = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q='
const ApiArtistas = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart'


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
        albums:[],
        busqueda:[],
        artistas: [],
        load: true,
        data: props.info,
    
    }
}

// canciones
componentDidMount(){
  this.traerInfo(ApiArtistas,this.seting)
}

traerInfo(ApiArtistas,callback){
  fetch(ApiArtistas)
  .then(res => res.json())
  .then(data => this.setState({
    artistas: data.data,
    mas: data.info // aca poner .next
  }))
  .catch(error => console.log(error))
}



//albumes
  componentDidMount(){
    this.traerInfo(ApiAlbums,this.seting)
  }

  traerInfo(ApiAlbums,callback){
    fetch(ApiAlbums)
        .then(res => res.json())
        .then(data => this.setState({
           albums: data.data,
           mas: data.info // deberia poner .next
        }, ()=> console.log(this.state.albums))) 
        .catch(err => console.log(err))
    }

    buscarResultados(valorBuscado){
      fetch(`${searchEndpoint}${valorBuscado}`)
        .then(res => res.json())
        .then(data => this.setState({
          busqueda:data.data
        })) 
        .catch(err => console.log(err))
    }


  render() {
    return (
      <>   
      <main> 
        <div className='albums'>
            <h3 className="comogenre"><a href="" > Albums </a> </h3>
           <ContenedorAlbums data={this.state.albums} />
         </div>

            <section className="section2">
                <div>
                    <h3 className="comogenre"><a href="" > Artists </a> </h3>
                    <ContenedorArtistas data={this.state.artistas} />
                </div>  
            </section>
      </main>
      </>

    )
  }
}