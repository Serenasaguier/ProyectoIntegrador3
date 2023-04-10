
import React from "react";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Buscar from "./components/Buscador.js/Buscador";
<<<<<<< HEAD
import Home from "./components/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
=======
import Home from "./screens/Home/Home";
import Favoritos from "./components/Favoritos/Favoritos";
import NotFound from "./screens/NotFound/NotFound";
import Artistas from "./screens/Artistas/Artistas";
import Albums from "./screens/Albums/Albums";
>>>>>>> f9999133fbe0655576aa7b83c0f09b53c564e00e

function App() {
  
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Favoritos' component={Favoritos} />
          <Route path='/Artistas' component={Artistas}/>
          <Route path='/Albums' component={Albums} />
          <Route path='/Buscar' component={Buscar} />
         <Route path='' component={ NotFound } />

        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;