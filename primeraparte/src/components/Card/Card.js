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
    };
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
          <img src={this.props.info.cover}></img>
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
      </div>
    );
  }
}

export default Card;