import React, { Component } from "react";
import './detalletrack.css'
class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      id: Number(props.match.params.id),
      datosAlbum: [],
      genres: "",
      companies: {},
      country: {},
      mensaje: "Agregar a favoritos",
      iconFav: "fa-regular fa-heart",
      loader: true,
      data: props.info,
    };
  }

  componentDidMount() {
    console.log("algo", this.state.id);
    fetch(
      `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        this.setState({
          datosAlbum: data,
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

  render() {
    return (
      <React.Fragment>
        <img src="../../images/loader.gif" alt="loader" /> :
        <div  className="article1">

        
        <article className="detail-card canciones masLargo">
          <div>
            {
              this.state.datosAlbum &&
              this.state.datosAlbum.album && <img className="contenedorfoto" src={`${this.state.datosAlbum.album.cover}`} alt="" />
            }
            
          </div>
          <div>
            <h3 className="title-detail canciones">
              {this.state.datosAlbum.title}
            </h3>
            <div className="masChico">
              <h3 className="canciones">Artista: { this.state.datosAlbum &&
              this.state.datosAlbum.album && this.state.datosAlbum.artist.name}</h3>
            </div>
            <p className="canciones">
              Fecha de publicacion: {this.state.datosAlbum.release_date}
            </p>
            <div className="canciones color">
              <p className="canciones ">Disco: { this.state.datosAlbum &&
              this.state.datosAlbum.album && this.state.datosAlbum.album.title}</p>
              
            </div>
            

            <p
              className="boton canciones"
              onClick={() => this.modificarFavoritos(this.state.id)}
            >
              <i className={this.state.iconFav}></i> {this.state.mensaje}
            </p>
          </div>
        </article>
        </div>
      </React.Fragment>
    );
  }
}

export default Detalle;