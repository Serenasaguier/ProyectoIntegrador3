import React, { Component } from "react";
import CardCanciones from "../CardCanciones.js/CardCanciones";

const ApiArtistas =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart";
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

console.log(ApiArtistas);

class ContenedorArtistas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistas: [],
      load: true,
      mas: " ",
      data: props.info,
    };
  }

  render() {
      // console.log(this.props.data, 'data')

    return (
      <div className='gridContainer'>
        {this.props.data && 
        this.props.data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <div className='character-card'>
            {console.log(this.props.data,'conteneee')}
          {this.props.data.map((losArtistas) => (
            <CardCanciones info={losArtistas} />
          ))}
          </div>
        )}
      </div>
    );
  }
}

export default ContenedorArtistas;