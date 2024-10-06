import React from 'react';
import '../estilos/Tabla.css'

const Tabla = ({ capitulos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Título</th>
        </tr>
      </thead>
      <tbody>
        {capitulos.map((capitulo) => (
          <tr key={capitulo.numero}>
            <td>{capitulo.numero}</td>
            <td>{capitulo.titulo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
