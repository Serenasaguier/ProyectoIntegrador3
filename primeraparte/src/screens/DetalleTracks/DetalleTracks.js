import React, { Component } from 'react';


class DetalleTracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      id: Number(props.match.params.id),
      datosTracks: [],
      genres: "",
      companies: {},
      country: {},
      mensaje: "Agregar a favoritos",
      iconFav: "fa-regular fa-heart",
      loader: true,
      data: props.info
    };
  }

  componentDidMount() {
    console.log("algo", this.state.id);
    fetch(
      `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        this.setState({
          datosTracks: data,
        });
      })
      .catch((err) => console.log(err));

    let favoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage !== null) {
      favoritos = JSON.parse(recuperoStorage);
    }

    if (favoritos.includes(this.state.id)) {
      this.setState({
        mensaje: "Quitar de favoritos",
        iconFav: "fa-solid fa-heart",
      });
    }
  }

  modificarFavoritos(id) {
    let favoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage !== null) {
      let favoritosToArray = JSON.parse(recuperoStorage);
      favoritos = favoritosToArray;
    }
    if (favoritos.includes(id)) {
      let sacarFav = favoritos.indexOf(id);
      favoritos.splice(sacarFav, 1);
      this.setState({
        mensaje: "Agregar a favoritos",
        iconFav: "fa-regular fa-heart",
      });
    } else {
      favoritos.push(id);
      this.setState({
        mensaje: "Quitar de favoritos",
        iconFav: "fa-solid fa-heart",
      });
    }

    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favoritosToString);

    console.log(localStorage);
  }

  // falta el player y que se vean las imagenes
  render() {
    return (
      <>
        <img src="../../images/loader.gif" alt="loader" /> :
        <article className="detail-card canciones masLargo">
          <img src={`${this.state.datosTracks.album.cover}`} alt="" />
          <div >
            <h3 className="title-detail canciones">{this.state.datosTracks.title}</h3>
            <h3 className="title-detail canciones">{this.state.datosTracks.artist.name}</h3>
            <h3 className="title-detail canciones">{this.state.datosTracks.album.title}</h3>
            <div className="masChico">
            <h3 className="title-detail canciones">{this.state.datosTracks.link}</h3>
            </div>
            
            <p 
              className="boton canciones"
              onClick={() => this.modificarFavoritos(this.state.id)}>
              <i className={this.state.iconFav}></i> {this.state.mensaje}
            </p>
          </div>
        </article>
      </>
    );
  }
}

export default DetalleTracks;