import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import { Youtubewe } from './Youtubewe';

const Juego1 = () => {
  const [escogido,setEscogido] = useContext(UserContext);
  return (
    <div className="container text-center mt-5">
      
      <div className="card shadow-lg p-4 bg-danger text-white">
        <h1 className="display-4">Gracias por votar por {escogido}</h1>
        <p className="lead">Tu voto ha sido registrado correctamente.</p>
      </div>
      <Youtubewe></Youtubewe>
    </div>
  );
}

export default Juego1;