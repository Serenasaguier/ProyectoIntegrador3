import React from "react";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Buscar from "./components/Buscador.js/Buscador";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import NotFound from "./screens/NotFound/NotFound";
import Artistas from "./screens/Artistas/Artistas";
import Albums from "./screens/Albums/Albums";
import DetalleElemento from "./screens/DetalleElemento/DetalleElemento";

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
          <Route path='/album/:id' component={DetalleElemento} />
          

          {/* Abajo de todo va el notfound */}
          <Route path='' component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;