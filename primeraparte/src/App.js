
import React from "react";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Buscar from "./components/Buscador.js/Buscador";
import Home from "./components/Home/Home";
import Favoritos from "./components/Favoritos/Favoritos";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Favoritos' component={Favoritos} />
          <Route path='/Buscar' component={Buscar} />
         <Route path='' component={ NotFound } />
        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;