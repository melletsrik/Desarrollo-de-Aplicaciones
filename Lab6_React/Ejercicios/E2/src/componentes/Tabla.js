import React from 'react';
import { useParams } from 'react-router-dom';

const capitulos = [
  { id: 1, titulo: 'Capítulo 1: El encuentro', contenido: 'Aquí va el contenido del capítulo 1.' },
  { id: 2, titulo: 'Capítulo 2: El despertar', contenido: 'Aquí va el contenido del capítulo 2.' },
  
];

const Capitulo = () => {
  const { id } = useParams();
  const capitulo = capitulos.find((c) => c.id === parseInt(id));

  return (
    <div>
      {capitulo ? (
        <div>
          <h2>{capitulo.titulo}</h2>
          <p>{capitulo.contenido}</p>
        </div>
      ) : (
        <p>Capítulo no encontrado</p>
      )}
    </div>
  );
};

export default Capitulo;
