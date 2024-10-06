import React from 'react';

export default function Home({ setEstaAutenticado }) {
  const handleSubscribe = () => {
    setEstaAutenticado(true);
  };

  const handleUnsubscribe = () => {
    setEstaAutenticado(false);
  };

  return (
    <div>
      <h1>Página de Mangas</h1>
      <p>Explora nuestros mangas y suscríbete para acceder a contenido exclusivo.</p>
      <button onClick={handleSubscribe}>Suscribirse</button>
      <button onClick={handleUnsubscribe}>Quitar Suscripción</button>
    </div>
  );
}
