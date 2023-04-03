import React, { Component } from 'react'

export default class SeccionPadre extends Component {
  render() {
    return (
        <article className="data-detail">
        <div className="card-content">
            <h4>{props.seccionPadre}</h4>
            <p>Aca van los de cada uno</p>
        </div>
        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
    </article>
    )
  }
}
