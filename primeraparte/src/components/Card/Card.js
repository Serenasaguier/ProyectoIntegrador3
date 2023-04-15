import React, { Component } from "react";
import { Link } from "react-router-dom";

const mas = [
  {
    nombre: "Ir al detalle",
    path: `/DetalleElemento`,
  },
];


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "Ver mas",
      clase: "hidden",
      data: props.info,
      albums: [],
      mas: "",
      mensaje: "agregar a favoritos"
    };
  }

  modificarFavoritos(id) {
    let favoritos = [];
    let recuperoStorage = localStorage.getItem("almbumsfavoritos");

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
    localStorage.setItem("almbumsfavoritos", favoritosToString);

    console.log(localStorage);
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

  cambiarTexto() {
    if (this.state.texto === "Ver mas") {
      this.setState({
        texto: "Ver menos",
        clase: "show",
      });
    } else {
      this.setState({
        texto: "Ver mas",
        clase: "hidden",
      });
    }
  }

  render() {
    return (
      <div className="article1">
        <div className="contenedorfoto">
          <img src={this.props.info.cover} alt='imagen'></img>
        </div>
        <h3 className="canciones">{this.props.info.title}</h3>
        <h4> </h4>
        {mas.map((extra, idx) => (
          <h3 className="canciones">
            <Link key={idx} to={`/album/${this.props.info.id}`}> {extra.nombre}</Link>
          </h3>
        ))}
        <p className={this.state.clase}>Artist name : {this.props.info.artist.name}</p>
        <h3 className="canciones">
          <a onClick={() => this.cambiarTexto()}> {this.state.texto} </a>
        </h3>

        <p
              className="canciones"
              onClick={() => this.modificarFavoritos(this.props.info.id)}
            >
              <i className={this.state.iconFav}></i> {this.state.mensaje}
            </p>
      </div>
      

    );
  }
}

export default Card;