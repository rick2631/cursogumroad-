import React from 'react';
import estilos from './SearchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={estilos.contenedor}>
    <input type="text" placeholder='Cuidad'/>
    <button onClick={props.SearchBar}className={estilos.btn}> Agregar </button>
  </div>
  )
};