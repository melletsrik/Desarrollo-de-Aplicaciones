import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../estilos/Capitulos.css'

const Capitulos = ({ capitulos }) => {
  return (
    <div className='capitulos'>
      <nav>
        <Link to="nuevos">Capítulos Nuevos</Link>
        <Link to="gustados">Capítulos Más Gustados</Link>
      </nav>
      {/* Renderiza la tabla si está en la ruta principal de /capitulos */}
      <Outlet context={{ capitulos }} />
    </div>
  );
};

export default Capitulos;
