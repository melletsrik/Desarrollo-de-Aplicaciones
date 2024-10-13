import React from "react";
import { Link, useParams } from "react-router-dom";
import "../EstilosComponentes.css";
import "./DetalleAnime.css";

const DetalleAnime = () => {
  const { nombreAnime } = useParams();

  const capitulos = ["Capítulo 1", "Capítulo 2", "Capítulo 3"];

  return (
    <div className="container">
      <h2>Detalles del Anime: {nombreAnime}</h2>
      <h3>Capítulos:</h3>
      <ul className="capituloList"> 
        {capitulos.map((capitulo, index) => (
          <li key={index} className="capituloItem"> 
            <Link to={`/anime/${nombreAnime}/capitulo/${index + 1}`}>
              {capitulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleAnime;