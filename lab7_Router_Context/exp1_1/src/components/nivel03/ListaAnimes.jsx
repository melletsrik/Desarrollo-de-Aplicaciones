import React from "react";
import { Link, useParams } from "react-router-dom";
import '../EstilosComponentes.css';
import './ListaAnimes.css'

const animesPorCategoria = {
  Acción: ["Naruto", "Attack on Titan", "Dragon Ball Z"],
  Comedia: ["One Punch Man", "Gintama", "KonoSuba"],
  Drama: ["Your Lie in April", "Clannad", "Anohana"],
  Fantasía: ["Fullmetal Alchemist", "Sword Art Online", "Fairy Tail"],
};

const ListaAnimes = () => {
  const { nombreCategoria } = useParams();

  const animes = animesPorCategoria[nombreCategoria];

  if (!animes) {
    return <h2>Categoría no encontrada</h2>;
  }

  return (
    <div className="container">
      <h2>Lista de Animes en la categoría: {nombreCategoria}</h2>
      <ul className="animeList">
        {animes.map((anime, index) => (
          <li key={index} className="animeItem">
            <Link to={`/anime/${anime}`}>{anime}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAnimes;