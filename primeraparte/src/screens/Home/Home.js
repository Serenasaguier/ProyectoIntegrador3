import React, { Component } from 'react'
import ContenedorAlbums from '../../components/ContenedorAlbums/ContenedorAlbums'
import ContenedorArtistas from '../../components/ContenedorArtistas/ContenedorArtistas'


export default class Home extends Component {
  render() {
    return (
      <>   
      <main> 
                <div className='albums'>
                    <h3 className="comogenre"><a href="" > Albums </a> </h3>
                    <ContenedorAlbums />\

                </div>
            <section className="section2">
                <div>
                    <h3 className="comogenre"><a href="" > Artists </a> </h3>
                    <ContenedorArtistas />
                </div>  
            </section>
      </main>
      </>

    )
  }
}