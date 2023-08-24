import React from 'react';
import React, { useState } from 'react';

export const primerComponente = () => {
  //let nombre = 'NELLY';
  let gmail = 'nlly.rro@gmail.com';
  let pelicula = [
    "Buscando a Nemo",
    "Barbie",
    "Alicia en el país de las maravillas"
  ];
  // constante para cambiar ombre al dar click a un boton
  //Dentro de react usamos estados, un estado es como una variable que esta sujeta a cambios. si quiero cambiar un valor y que automaticamente se cambie en la pantalla.(USAMOS useState)
  // Usamos la destructuración de un array:
  const[nombre, setNombre]=useState("Nelly");
  
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
}
  return (
    <div>
      <h1> Esta es una prueba de mi primer componente </h1>
      <p>Este es un ejemplo de un componente</p>
      <p>Mi nombre es:<strong className={nombre.length >= 4 'verde' : 'rojo'}>{nombre}</strong> </p>
      <p>Mi correo es: {gmail} </p>

      <input type="text" onChange={e=> cambiarNombre(e.target.value)}placeholder='cambia tu nombre' ></input>

      <button onClick={ e => cambiarNombre("NELLY NAVARRO")}> 
cambiar nombre
</button>
      <h2>Película:</h2>
      <ul>
{
  //cada elemento que yo itero dentro de una template debe pasar por una key
  //se pone el atributo key y el atributo índice se pasa como segundo parametro 
  pelicula.map( (curso, indice) => {
    // devuelva algo con el return
    return (<li key={}>
      {pelicula}
    </li>)
  })
}

      </ul>
    </div>
  );
};
