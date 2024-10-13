import React from "react";
import { useParams } from "react-router-dom";
import '../EstilosComponentes.css';
import './DetalleCapitulo.css'

const DetalleCapitulo = () => {
  const { nombreAnime, numCapitulo } = useParams();

  return (
    <div className="container">
      <h2>
        {nombreAnime} - Capítulo {numCapitulo}
      </h2>
      <p>Detalles del capítulo {numCapitulo}...</p>
    </div>
  );
};

export default DetalleCapitulo;