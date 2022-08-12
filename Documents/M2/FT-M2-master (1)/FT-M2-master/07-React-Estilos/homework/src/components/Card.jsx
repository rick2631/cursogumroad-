import React from 'react';
import estilos from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={estilos.contenedor}>
    <button onClick={props.onClose} className={estilos.btn} >X</button>
    <h4>{props.name}</h4>
  <div className={estilos.infoCod} >
    <p>Min</p>
    <p>{props.min}</p>
    <p>Max</p>
    <p>{props.max}</p>
  </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}alt={"img"}/>
  </div>
  )
};
