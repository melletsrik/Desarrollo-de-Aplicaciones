import React from "react";
import { Link } from "react-router-dom";
import '../EstilosComponentes.css';
import './CategoriasAnime.css'

const categorias = [
  { id: 1, nombre: "Acción" },
  { id: 2, nombre: "Comedia" },
  { id: 3, nombre: "Drama" },
  { id: 4, nombre: "Fantasía" },
];

export const CategoriaAnime = () => {
  return (
    <div className="container">
      <h1>AnimesFree</h1>
      <h2>Categorías de Animes</h2>
      <ul className="categoriaList">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="categoriaItem">
            <Link to={`/categoria/${categoria.nombre}`}>
              {categoria.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaAnime;