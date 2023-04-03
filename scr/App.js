import React from "react";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Buscar from "./screens/Buscar/Buscar";

function App() {
  

    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Favoritos' component={Favoritos} />
          <Route path='/Buscar/:id?' component={Buscar} />
  
        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;
  
