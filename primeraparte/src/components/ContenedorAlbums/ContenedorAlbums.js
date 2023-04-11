import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

const ApiAlbums = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums'
const url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=9'


const verTodas = [
  {
      nombre: ' Ver todas',
      path : '/Albums'
  }
]

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
      <div>
        
        {
           this.props.data.length === 0 ?
                    <p>Cargando...</p> :
                    <div className="character-card" >
                      {
                        this.props.data.map(album =>
                        <Card info={album} />)
                        
                      }
                      <div>
                        {verTodas.map((ver,idx)=>(
                          <h3 className='canciones'>
                            <Link to={'/Albums'}>Ver todas</Link>
                          </h3>
                        ))}
                      </div>
                    </div>          
         }
      </div>
    )
  }

}

export default ContenedorAlbums
