import React from 'react';
import '../estilos/Capitulos.css'

const CapitulosMasGustados = () => {
  return (
    <div className='capituloContenido'>
      <h3>Capítulos Más Gustados</h3>
      <ul>
        <li>Capítulo 5: El poder oculto</li>
        <li>Capítulo 7: El gran enfrentamiento</li>
        {/* Agrega más capítulos gustados aquí */}
      </ul>
    </div>
  );
};

export default CapitulosMasGustados;
