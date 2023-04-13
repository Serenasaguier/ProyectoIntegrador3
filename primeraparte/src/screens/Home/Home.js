import React, { Component } from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorArtistas from "../../components/ContenedorArtistas/ContenedorArtistas";

import { Link } from 'react-router-dom'


const ApiAlbums =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums";
const searchEndpoint =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=";
const ApiArtistas =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart";
const UrlArtistas = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      busqueda: [],
      artistas: [],
      load: true,
      data: props.info,
      valorInput: '',
      enviar: '',
      resultadosBusqueda: '',
      mensaje: '',
      verMas: true,
      cantidad: 6,
    };
  }

  traerInfoCanciones(ApiArtistas, callback) {
    fetch(ApiArtistas)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, 'info cacniones')
        this.setState({
          artistas: data.tracks.data,
          mas: data.info, // aca poner .next
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
            albums: data.data,
            mas: data.info, // deberia poner .next
          },
          // () => console.log(this.state.albums)
        )
      )
      .catch((err) => console.log(err));
  }



  componentDidMount() {
    console.log('entrando compon')
    this.traerInfo(ApiAlbums, this.seting);
    this.traerInfoCanciones(ApiArtistas, this.seting);
  }

  //Funcion para guardar el valor del input
  guardarValor(event) {
    event.preventDefault();
    this.setState({
      valorInput: event.target.value,
      mensaje: '',
      resultadosBusqueda: []
    },
      () => console.log(`Este es el estado que se ve el setstate extendido ${this.state.valorInput}`))
  }

  //Funcion para enviar el valor del input y ejecutar el metodo {buscador}
  metodoQueEnvia(event) {
    event.preventDefault();
    // console.log(event)
    this.buscador(this.state.valorInput)
  }

  //Funcion para buscar en el endpoint de busqueda
  // Recibe un string con el valor a buscar
  // esta funcion se ejecuta en el metodo {metodoQueEnvia}
  buscador(valorBuscado) {
    // console.log('buscando :', valorBuscado);
    if (valorBuscado === '') {
      this.setState({
        mensaje: ' No escribiste nada'
      })
    } else {
    /*   fetch(searchEndpoint + valorBuscado)
        .then(res => res.json())
        .then(data => {
          this.setState({
            resultadosBusqueda: data.data,
            mensaje: `Se encontraron un total de ${data.data.length} registros para ${valorBuscado}`
          });
          if (data.data.length === 0) {
            this.setState({
              mensaje: `No se han encontrado resultados para ${valorBuscado}`
            })
          }
        })
        .catch(error => console.log(error)) */
        fetch(searchEndpoint + valorBuscado)
        .then(res => res.json())
        .then(data => {
          this.setState({
            resultadosBusqueda: data.data,
            mensaje: `Se encontraron ${data.data.length} resultados para ${valorBuscado}`
          });
          if (data.data.length === 0) {
            this.setState({
              mensaje: `No se han encontrado resultados para ${valorBuscado}`
            })
          }
        })
        .catch(error => console.log(error))
    }
  }

  //Funcion para mostrar mas elementos
  verMasElementos(event) {
    event.preventDefault();
    this.setState({
      cantidad: this.state.resultadosBusqueda.length
    })
    this.state.verMas = false
  }

  //Funcion para mostrar menos elementos
  verMenosElementos(event) {
    event.preventDefault();
    this.setState({
      cantidad: 6
    })
    this.state.verMas = true
  }

  componentDidMount() {
    console.log('entrando compon')
    this.traerInfo(ApiAlbums, this.seting);
    this.traerInfoCanciones(ApiArtistas, this.seting);
  }

  render() {
    return (
      <>
        <main>
          <div className='navbuscador'>
            <input 
            type="text" 
            placeholder="Búsqueda" 
            className="search buscar" 
            onChange={(event) => this.guardarValor(event)}
            value={this.state.valorInput} 
            />
            <button 
            type="submit" 
            onClick={(event) => this.metodoQueEnvia(event)}
            > 
            Search
            </button>
          </div>


          //Para mostrar los resultados de la busqueda
          <div className="albums">

            <h3>{this.state.mensaje} </h3>

            {this.state.resultadosBusqueda.length > 0 &&

              <>
                <div className="comogenre" >
                  <h3>Resultados de la busqueda  </h3>
                </div>
                <ContenedorArtistas data={this.state.resultadosBusqueda.slice(0, this.state.cantidad)} />

                <div>
                  {
                    this.state.verMas ?
                      <h3 className='comogenre' >
                        <button onClick={(event) => this.verMasElementos(event)} >Ver mas resultados </button>
                      </h3>
                      : <h3 className='comogenre' >
                        <button onClick={(event) => this.verMenosElementos(event)} >Ver menos resultados </button>
                      </h3>
                  }
                </div>
              </>

            }
          </div>
          <div className="albums">

            <div className="comogenre" >
              <h3>  Albums{" "} </h3>
            </div>
            <ContenedorAlbums data={this.state.albums.slice(0, 6)} />
            <div>

              <h3 className='comogenre' >
                <Link to={'/Albums'} >Ver todos los albums</Link>
              </h3>

            </div>
          </div>

          <div className="albums">

            <div className="comogenre" >
              <h3>Canciones </h3>
            </div>

            <ContenedorArtistas data={this.state.artistas.slice(0, 6)} />
            <div>

              <h3 className='comogenre' >
                <Link to={'/Artistas'} >Ver todas las canciones </Link>
              </h3>

            </div>
          </div>
        </main>
      </>
    );
  }
}
