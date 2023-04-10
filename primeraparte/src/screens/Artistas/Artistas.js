import React, { Component } from 'react'
import ContenedorArtistas from '../../components/ContenedorAlbums/ContenedorAlbums'

 class Artistas extends Component {
  render() {
    return (
      <>
        <div className='favs'>Artistas</div>
        <ContenedorArtistas />
        </>
        
    )
  }
}

export default Artistas