import React, { Component } from 'react'
import ContenedorArtistas from '../../components/ContenedorAlbums/ContenedorAlbums'


const ApiArtistas =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart";

 class Artistas extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
      artistas: [],
      load: true,
      data: props.info,
      filtrar: '',
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




  componentDidMount() {
    console.log('entrando compon')
    this.traerInfoCanciones(ApiArtistas, this.seting);
  }


  filtro(e) {

    this.setState({
      filtrar: e.target.value
    })
    console.log(this.state.filtrar)
  }


  render() {

    console.log('seccion artistas ', this.state.artistas);
    return (
      <>
        <div className='gridContainer'>
        <div className="comogenre" >
          <h1> Canciones{" "} </h1>
        </div>
        <div className='filtro'>
          <h3>  Buscar por nombre :  </h3>
          <input type='text' onChange={(event) => this.filtro(event)} />
        </div>
        <ContenedorArtistas 
        data={this.state.artistas.filter(
          ele => ele.artist.name.toLowerCase().includes(this.state.filtrar.toLowerCase()
          )
        )} 
        />
      </div>
        </>



        
    )
  }
}

export default Artistas