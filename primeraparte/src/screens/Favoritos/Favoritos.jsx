import React, { Component } from "react";
import { Link } from "react-router-dom";
import './favoritos.css'
class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      canciones: [],
      borrar: [],
      loader: true,
    };
  }

  componentDidMount() {
    let recuperoStorage = localStorage.getItem("favoritos");
    let favoritosToArray;

    console.log(this.props, recuperoStorage, "recuperoStorage");

    if (recuperoStorage !== null) {
      favoritosToArray = JSON.parse(recuperoStorage);
      let canciones = [];
    
      for (let i = 0; i < favoritosToArray.length; i++) {
        if (favoritosToArray[i] !== null) {
          fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${favoritosToArray[i]}`,
          )
            .then((res) => res.json())
            .then((data) => {
              canciones.push(data);
              console.log(data, "fetch");
              this.setState({
                canciones: canciones,
                loader: false,
              });
            })
            .catch((err) => console.log(err));
        }
      }
    }

    if (JSON.parse(recuperoStorage).length === 0) {
      this.setState({
        loader: false,
      });
    }
  }

  borrar(id) {
    let recuperoStorage = localStorage.getItem("favoritos");
    let favoritosToArray = JSON.parse(recuperoStorage);

    let sacarFav = favoritosToArray.indexOf(id);
    favoritosToArray.splice(sacarFav, 1);

    let favoritosToString = JSON.stringify(favoritosToArray);
    localStorage.setItem("favoritos", favoritosToString);
  }

  render() {
    return (
      <main>
        {this.state.loader === true ? (
          <img src="../../images/loader.gif" alt="Loader" />
        ) : (
          <React.Fragment>
            <div className="comogenre" >
              <h3>  Favoritos{" "} </h3>
            </div>
            <div className="article1">
            
            <section className="cardContainer">
              {this.state.canciones.length > 0 ? (
                this.state.canciones.map((unaCancion, idx) => (
                  <article className="movie-card" key={idx}>
                    {console.log(unaCancion, "nashe")}
                    <Link to={`/detallePelicula/id/${unaCancion.id}`}>
                      {unaCancion.album && <img className="contenedorfoto" src={unaCancion.album.cover} alt="" />}
                    </Link>
                    <div className="card-favdiv">
                      <h3 className="canciones">{unaCancion.title}</h3> {/* Nombre */}
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => {
                          this.state.borrar.push(unaCancion.id);
                          this.setState({
                            canciones: this.state.canciones.filter(
                              (pelicula) =>
                                !this.state.borrar.includes(pelicula.id)
                            ),
                          });
                          this.borrar(unaCancion.id);
                        }}
                      > Eliminar de Favoritos</i>
                    </div>
                    <Link to={`/DetalleTracks/${unaCancion.id}`}>
                      <p className="canciones"> Ir a detalles </p>
                    </Link>
                  </article>
                  
                ))
              ) : (
                <h3>Todavía no elegiste ningún favorito!</h3>
              )}
            </section>
            </div>
          </React.Fragment>
        )}
      </main>
    );
  }
}

export default Favoritos;