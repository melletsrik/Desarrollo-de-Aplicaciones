import { useContext } from 'react';

import { UserContext } from '../contexts/UserProvider';
export function Card(){
    const [escogido,setEscogido] = useContext(UserContext);
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(escogido)}`;

    return( 
<div className="container text-center p-4">
  <div className="card bg-danger text-white p-3">
    <h1 className="card-title">¿Quién fue {escogido}?</h1>
    <p className="card-text">Explora más información acerca de {escogido} haciendo clic en el enlace:</p>
    {escogido && (
      <a 
        href={searchUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-light text-danger"
      >
        Buscar sobre {escogido} en Google
      </a>
    )}
  </div>
</div>
    )
}