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
      borrarAlbum: [],
      loader: true,
      albumes:[]
    };
  }

  componentDidMount() {
    let recuperoStorage = localStorage.getItem("favoritos");
    let recuperoAlbumStorage = localStorage.getItem("almbumsfavoritos");
    let favoritosToArray;
    let albumFavoritosToArray;

    console.log(this.props, recuperoAlbumStorage, "recuperoAlbumStorage");

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
    if (recuperoAlbumStorage !== null) {
      albumFavoritosToArray = JSON.parse(recuperoAlbumStorage);
      let canciones = [];
      let albumes = [];
    
      for (let i = 0; i < albumFavoritosToArray.length; i++) {
        if (albumFavoritosToArray[i] !== null) {
          
            fetch(
              `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${albumFavoritosToArray[i]}`,
            )
              .then((res) => res.json())
              .then((data) => {
                albumes.push(data);
                console.log(data, "album fetch");
                this.setState({
                  albumes: albumes,
                  loader: false,
                });
              })
              .catch((err) => console.log(err));
        }
      }
    }

    if (JSON.parse(recuperoAlbumStorage).length === 0 && JSON.parse(recuperoStorage).length === 0) {
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


  borrarAlbum(id) {
    let recuperoAlbumStorage = localStorage.getItem("almbumsfavoritos");
    let favoritosToArray = JSON.parse(recuperoAlbumStorage);

    let sacarFav = favoritosToArray.indexOf(id);
    favoritosToArray.splice(sacarFav, 1);

    let favoritosToString = JSON.stringify(favoritosToArray);
    localStorage.setItem("almbumsfavoritos", favoritosToString);
  }

  render() {

    console.log(this.state.albumes, "albumes favoritos");
    return (
      <main>
        {this.state.loader === true ? (
          <img src="../../images/loader.gif" alt="Loader" />
        ) : (
          <React.Fragment>
             <div className="comogenre" >
              <h3>  Albums Favoritos{" "} </h3>
            </div>
            <div className="article1">
            <section className="cardContainer">
              {this.state.albumes.length > 0 ? (
                this.state.albumes.map((unaAlbum, idx) => (
                  <article className="movie-card" key={idx}>
                    {console.log(unaAlbum, "nashe")}
                    <Link to={`/detallePelicula/id/${unaAlbum.id}`}>
                      {unaAlbum.title && <img className="contenedorfoto" src={unaAlbum.cover} alt="" />}
                    </Link>
                    <div className="card-favdiv">
                      <h3 className="canciones">{unaAlbum.title}</h3> {/* Nombre */}
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => {
                          this.state.borrarAlbum.push(unaAlbum.id);
                          this.setState({
                            albumes: this.state.albumes.filter(
                              (otroAlbum) =>
                                !this.state.borrarAlbum.includes(otroAlbum.id)
                            ),
                          });
                          this.borrarAlbum(unaAlbum.id);
                        }}
                      > Eliminar de Favoritos</i>
                    </div>
            
                       <Link to={`/album/${unaAlbum.id}`}>
                      <p className="canciones"> Ir a detalles </p>
                    </Link>
                  </article>
                  
                ))
              ) : (
                <h3>Todavía no elegiste ningún album favorito!</h3>
              )}
            </section>
            </div>



            <div className="comogenre" >
              <h3> Canciones Favoritos{" "} </h3>
            </div>
            <div className="article1">
            <section className="cardContainer">
              {this.state.canciones.length > 0 ? (
                this.state.canciones.map((unaCancion, idx) => (
                  <article className="movie-card" key={idx}>
                    {console.log(unaCancion, "nashe")}
                    <Link to={`/detalleTracks/id/${unaCancion.id}`}>
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
                <h3>Todavía no elegiste ninguna canción favorita!</h3>
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