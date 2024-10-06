// .js equivale a .jsx cuadno se interpretan como javascript
// estandar indentacio en js en 2 espacios
import React from 'react';
import '../estilos/CartaPersonaje.css';

//un componente funcional de react retorna un elemento jsx
//React: crear componentes reusables <- props
//props el componente que crea el componente tiene que enviar props, es envi UNIDIRECCIONAL
//el componente que lo renderiza puede le enviar props pero en no puede retornar props
function CartaPersonaje(props){
  return (
    <div className = 'contenedorPersonaje'>
      <div className='contenedorDatosPersonaje'>
        <div className='datosPersonaje'>
          <p className ='nombrePersonaje'>
            <strong>{props.nombre} </strong>
          </p>
          <p className = 'edadPersonaje'>
            {props.edad}
          </p>
          <p className='generoPersonaje'>
            {props.genero}
          </p>
          <p className='poderPersonaje'>
            {props.poder}
          </p>
        </div>
      </div>
      <img className='imagenPersonaje' 
        src={require(`../imagenes/eleceed${props.imagen}.webp`)}
        //plantilla literal: permite insertar codigo js dentro de la cadenad de caracteres 
      />
    </div>
  );
}

export default CartaPersonaje;