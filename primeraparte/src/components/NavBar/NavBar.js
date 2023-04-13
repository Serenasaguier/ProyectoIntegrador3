
// TIENE QUE TENER LOGO O NOMBRE DE LA APP
//  BARRA DE NAV CON LINK A HOME, FAVORITOS Y UN 
//FORMULARIO DE BUSQUEDA

import React from 'react';
import {Link} from 'react-router-dom'

const opciones = [
    {
        nombre: 'Tod@s',
        path: '/',
    },
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
        nombre: 'Canciones',
        path: '/Artistas',
    },
    
]

function Navbar(props){

    return (
        <header className='NavBar'>
        <nav className='navheader'>
            <div className='infonav'>
                { 
                    opciones.map((opcion,idx)=>  <a className='menuheader'>
                        <Link to={opcion.path}>{opcion.nombre}</Link></a>
                )
                }
            </div>
        </nav>
        </header>
    )
}

export default Navbar


