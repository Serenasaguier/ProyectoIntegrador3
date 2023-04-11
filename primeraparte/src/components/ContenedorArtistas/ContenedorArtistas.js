import React, { Component } from "react";
import CardCanciones from "../CardCanciones.js/CardCanciones";
import {Link} from 'react-router-dom'

const ApiArtistas =
  "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart";
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

const verTodas = [
  {
      nombre: ' Ver todas',
      path : '/Albums'
  }
]

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
      console.log(this.props.data, 'data')

    return (
      <div>
        {this.props.data && 
        this.props.data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <div className='character-card'>
          {this.props.data.map((losArtistas) => (
            <CardCanciones info={losArtistas} />
          ))}
          <div>
           {verTodas.map((ver,idx)=>(
               <h3 className='canciones'>
                 <Link to={'/Tracks'}>Ver todas</Link>
                 </h3>
                 ))}
           </div>
          </div>
        )}
      </div>
    );
  }
}

export default ContenedorArtistas;