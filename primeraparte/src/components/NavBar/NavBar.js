

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
        <header>
        <nav className='navheader'>
            <div>
                { 
                    opciones.map((opcion,idx)=> <a className='menuheader'>
                        <Link to={opcion.path}>{opcion.nombre}</Link>
                    </a>)
                }
            </div>
        </nav>
        </header>
    )
}

export default Navbar