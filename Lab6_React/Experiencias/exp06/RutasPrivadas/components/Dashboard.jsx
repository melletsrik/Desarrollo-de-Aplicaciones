import React from 'react';
import MangaList from './MangaList';

export default function Dashboard({ isAutenticado }) {
  return (
    <div>
      <h2>Panel de Control</h2>
      <MangaList isAutenticado={isAutenticado} />
    </div>
  );
}
