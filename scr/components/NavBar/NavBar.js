

// TIENE QUE TENER LOGO O NOMBRE DE LA APP
//  BARRA DE NAV CON LINK A HOME, FAVORITOS Y UN 
//FORMULARIO DE BUSQUEDA

import React from 'react';
import {Link} from 'react-router-dom'

const opciones = [
    {
        nombre: ' Home ',
        path: ' / ',
    },
    {
        nombre: ' Favoritos ',
        path: ' /Favoritos ',
    },
    {
        nombre: ' Buscar ',
        path: ' /Buscar ',
    }
]

function Navbar(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    opciones.map((opcion,idx)=> <li>
                        <Link to={opcion.path}>{opcion.nombre}</Link>
                    </li>)
                }
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar