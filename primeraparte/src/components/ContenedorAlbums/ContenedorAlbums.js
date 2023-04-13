import React, { Component } from 'react'
import Card from '../Card/Card'

const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums'

console.log(ApiAlbums)

class ContenedorAlbums extends Component {
    constructor(props){
        super(props)
        this.state={
            load: true,
            data:props.info,
            albums:[],
        }
    }

  render(){
    return(
      <div className='gridContainer'>
        
        {
           this.props.data.length === 0 ?
                    <p>Cargando...</p> :
                    <div className="character-card" >
                      {
                        this.props.data.map((album, idx) =>
                        
                        <Card info={album} key={idx} />)
                      }
                      
                    </div>          
         }
      </div>
    )
  }

}

export default ContenedorAlbums
