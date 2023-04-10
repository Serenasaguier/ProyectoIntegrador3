

// TIENE QUE TENER LOGO O NOMBRE DE LA APP
//  BARRA DE NAV CON LINK A HOME, FAVORITOS Y UN 
//FORMULARIO DE BUSQUEDA

import React from 'react';
import {Link} from 'react-router-dom'

const opciones = [
    {
        nombre: 'Home',
        path: '/',
    },
    {
        nombre: 'Favoritos',
        path: '/Favoritos',
    },
    {
        nombre: 'Albums',
        path: '/Albums',
    },
    {
        nombre: 'Artistas',
        path: '/Artistas',
    },
    {
        nombre: 'Buscar',
        path: '/Buscar',
    }
]

function Navbar(props){

    return (
        <body>
        <header className='NavBar'>
        <nav className='navheader'>
            <div className='infonav'>
                { 
                    opciones.map((opcion,idx)=> 
                        <Link className='menuheader' to={opcion.path}>{opcion.nombre}</Link>
                )
                }
            </div>
            
        </nav>
        </header>
        </body>
    )
}

export default Navbar


