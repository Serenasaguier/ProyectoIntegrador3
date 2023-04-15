import React, { Component } from 'react'
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums'


const ApiAlbums =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums";

class Albums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      load: true,
      data: props.info,
      filtrar: '',
    };
  }



  traerInfo(ApiAlbums, callback) {
    fetch(ApiAlbums)
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          {
            albums: data.data
          },
          () => console.log(this.state.albums)
        )
      )
      .catch((err) => console.log(err));
  }



  componentDidMount() {
    console.log('entrando compon')
    this.traerInfo(ApiAlbums, this.seting);
  }


  filtro(e) {

    this.setState({
      filtrar: e.target.value
    })
    console.log(this.state.filtrar)
  }



  render() {
    return (

      <div className='gridContainer'>
        <div className="comogenre" >
          <h1>  Albums{" "} </h1>
        </div>
        <div className='filtro'>
          <h3>  Buscar album :  </h3>
          <input type='text' onChange={(event) => this.filtro(event)} />
        </div>
        <ContenedorAlbums data={this.state.albums.filter(ele => ele.title.toLowerCase().includes(this.state.filtrar.toLowerCase())

        )} />
      </div>

    )
  }
}

export default Albums
