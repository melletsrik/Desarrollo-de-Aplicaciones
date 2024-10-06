import React from 'react';
import '../estilos/Cabecera.css';

function Cabecera(props) {
  return (
    <div>
      <header className="cabecera">
        <h1>{props.titulo}</h1>
      </header>
      <div className='autores'>
        <h2>{props.autores}</h2>
      </div>
    </div>
  );
}

export default Cabecera;
