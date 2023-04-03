import React, { Component } from 'react'
// importar el componente de la info 


export default class Home extends Component {
  render() {
    return (
      <>   
      <main>   
            <section class="section1 ">
                <div>
                    <h3 class="comogenre"><a href="detail-track.html" > Canciones </a> </h3>
                    <h2>Aca pongo canciones traidas del componente con el obj lit</h2>
                </div>
                

            </section>

            <section class="section2 ">
                <div>
                    <h3 class="comogenre"><a href="detail-album.html" > Albums </a> </h3>
                </div>
                
            </section> 
            <section class="section3">
                <div>
                    <h3 class="comogenre"><a href="detail-artist.html" > Artists </a> </h3>
                </div>  
            </section>
      </main>
      </>

    )
  }
}