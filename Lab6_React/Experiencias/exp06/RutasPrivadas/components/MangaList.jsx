import React from 'react';
import { Link } from 'react-router-dom';

export default function MangaList({ isAutenticado }) {
  return (
    <div>
      <h2>Lista de Mangas</h2>
      <ul>
        <li><Link to="/manga/1">Manga 1</Link></li>
        <li><Link to="/manga/2">Manga 2</Link></li>
        <li><Link to="/manga/3">Manga 3</Link></li>

        {isAutenticado && (
          <>
            <li><Link to="/manga/4">Manga 4 (Exclusivo)</Link></li>
            <li><Link to="/manga/5">Manga 5 (Exclusivo)</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}
