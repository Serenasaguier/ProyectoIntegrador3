import React, { Component } from 'react'

const ApiArtistas = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart'
let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart'

console.log(ApiArtistas)


 class ContenedorArtistas extends Component {

    constructor(props){
        super(props)
        this.state={
            artistas: [],
            load: true,
             mas:' ',
             Key: ' '
        }
    }
    
    componentDidMount(){
        this.traerInfo(ApiArtistas,this.seting)
      }
    
      traerInfo(ApiArtistas,callback){
        fetch(ApiArtistas)
        .then(res => res.json())
        .then(data => this.setState({
          artistas: this.state.artistas.concat(data),
          mas: data.info // aca poner .next
        }))
        .catch(error => console.log(error))
      }
    
      dameMas(){
        this.traerInfo(this.state.mas,this.setearData)
      }
    
      render(){
        return(
          <div>
            {
                        this.state.artistas.length === 0 ?
                        <p>Cargando...</p> :
                        <div>
                            <ul>
                                {
                                    this.state.artistas.map(artistas => <li>{artistas.name}</li>)
                                }
                            </ul>
                            <button onClick={()=> this.dameMas()}>Traer mas Artistas</button>
                        </div>
                    }
          </div>
        )
      }
}

export default ContenedorArtistas