import React, { Component } from "react";
import ContenedorAlbums from "../../components/ContenedorAlbums/ContenedorAlbums";
import ContenedorArtistas from "../../components/ContenedorArtistas/ContenedorArtistas";

const ApiAlbums =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums";
const searchEndpoint =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=";
const ApiArtistas =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      busqueda: [],
      artistas: [],
      load: true,
      data: props.info,
    };
  }

  traerInfoCanciones(ApiArtistas, callback) {
    fetch(ApiArtistas)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'info cacniones')
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
          () => console.log(this.state.albums)
        )
      )
      .catch((err) => console.log(err));
  }

  buscarResultados(valorBuscado) {
    fetch(`${searchEndpoint}${valorBuscado}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          busqueda: data.data,
        })
      )
      .catch((err) => console.log(err));
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
          <div className="albums">
            <h3 className="comogenre">
              <a href=""> Albums </a>{" "}
            </h3>
            <ContenedorAlbums data={this.state.albums} />
          </div>

          <section className="section2">
            <div>
              <h3 className="comogenre">
                <a href=""> Artists </a>{" "}
              </h3>
              {console.log(this.state.artistas, 'data artistas')}
              <ContenedorArtistas data={this.state.artistas} />
            </div>
          </section>
        </main>
      </>
    );
  }
}