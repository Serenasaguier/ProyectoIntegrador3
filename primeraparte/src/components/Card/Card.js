import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h1>{props.info.title}</h1>
        <img src={props.info.cover}></img>
    </div>
  )
}
