
import React, { Component } from 'react'
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums'

 class Albums extends Component {
  render() {
    return (
      <>
        <div className='favs'>Albums</div>
        <ContenedorAlbums />
      </>
    )
  }
}

export default Albums
