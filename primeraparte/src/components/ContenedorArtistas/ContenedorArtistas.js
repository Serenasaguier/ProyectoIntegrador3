import React, { Component } from 'react'
import CardCanciones from '../CardCanciones.js/CardCanciones'

const ApiArtistas = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart'
let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart'

console.log(ApiArtistas)


 class ContenedorArtistas extends Component {

    constructor(props){
        super(props)
        this.state={
            artistas: [],
            load: true,
             mas:' ',
             data: props.info,
        }
    }
    
      render(){
        return(
          <div>
            {
               this.props.data.length === 0 ?
                  <p>Cargando...</p> :
                  <article className='article1'>
                       {
                          this.props.data.map(losArtistas => <CardCanciones info={losArtistas}/>)
                       }
                 </article>
             }
          </div>
        )
      }
}

export default ContenedorArtistas