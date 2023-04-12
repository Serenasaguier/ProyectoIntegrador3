
import React, { Component } from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorArtistas from "../../components/ContenedorArtistas/ContenedorArtistas";


import { Link } from 'react-router-dom'


const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums'
const searchEndpoint = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q='
const ApiArtistas = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists';
//let UrlArtistas= `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=`;

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
        albums:[],
        busqueda:[],
        artistas: [],
        load: true,
        data: props.info,
        valorInput :'',
        enviar: '',
        resultadosBusqueda:'',
        mensaje: ''
    }
}

traerInfoCanciones(ApiArtistas, callback) {
  fetch(ApiArtistas)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'info cacniones')
      this.setState({
        artistas: data.tracks.data,
      });
    })
    .catch((error) => console.log(error));
}

traerInfo(ApiAlbums, callback) {
  fetch(ApiAlbums)
    .then((res) => res.json())
    .then((data) =>
      this.setState(
        {
        },
        () => console.log(this.state.albums)
      )
    )
    .catch((err) => console.log(err));
}


componentDidMount() {
  console.log('entrando compon')
  this.traerInfo(ApiAlbums, this.seting);
  this.traerInfoCanciones(ApiArtistas, this.seting);
}


    buscarResultados(valorBuscado){
      fetch(`${searchEndpoint}${valorBuscado}`)
        .then(res => res.json())
        .then(data => this.setState({
          busqueda:data.data
        })) 
        .catch(err => console.log(err))
    }
 

    // tiene que tener un loader Cargando ... 

   /* buscador(event){
        event.preventDefault();
        if (this.state.valorInput === '') {
            this.setState({
                enviar: ' No escribiste nada'
            })
        } else {
            /* fetch(searchEndpoint + this.state.valorInput)
            .then(res=> res.json())
            .then(data=>{
                this.setState({
                    resultadosBusqueda: data.data
                });
                if (data.data.length === 0 ) {
                    this.setState({
                       mensaje: `No se han encontrado resultados para ${this.state.valorInput}` 
                    })
                }
            })
            .catch(error=> console.log(error)) */
          /*  fetch(UrlArtistas + this.state.valorInput)
            .then(res=> res.json())
            .then(data=>{
                this.setState({
                    resultadosBusqueda: data.data
                });
                if (data.data.length === 0 ) {
                    this.setState({
                       mensaje: `No se han encontrado resultados para ${this.state.valorInput}` 
                    })
                }
            })
            .catch(error=> console.log(error))
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value,
            mensaje: '',
            resultadosBusqueda: []
        },
        ()=> console.log(`Este es el estado que se ve el setstate extendido ${this.state.valorInput}`))
    }

    metodoQueEnvia(event){
        console.log(event)
    } */

  render() {
    console.log(this.state.resultadosBusqueda)
    return (
      <>   
      <nav className=''>
        <div className='navbuscador formulario'>
        <form class="buscador navbuscador" onSubmit={(event)=> this.buscador(event)} >
                <input type="text" placeholder="Búsqueda" className="search buscar" onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput} />
                <button type="submit" onClick={(event)=> this.metodoQueEnvia(event)}> Search</button>
            </form> 
        </div>
        <p>{this.state.mensaje}</p>
        </nav>
      <main className='bodyhome'>
      <section> 
      {/* <ContenedorAlbums data={this.state.resultadosBusqueda} /> */}
      <ContenedorArtistas data={this.state.resultadosBusqueda} />
      </section> 
      <div className="comogenre" >
                 <h3>  Albums{" "} </h3>
              </div>
            <ContenedorAlbums data={this.state.albums.slice(0,6)} />
            <div>
                       
                          <h3 className='comogenre' >
                            <Link to={'/Albums'} >Ver todos los albums</Link>
                          </h3>
                       
                      </div>
          

          <div className="albums">
           
              <div className="comogenre" >
                 <h3>Artists </h3>
              </div>
              {console.log(this.state.artistas, 'data artistas')}
              <ContenedorArtistas data={this.state.artistas.slice(0,6)} />
              <div>  
                       <h3 className='comogenre' >
                         <Link to={'/Artistas'} >Ver todos los artistas </Link>
                       </h3>
                    
                   </div>
            </div>
        </main>
      </>
    );
  }
}