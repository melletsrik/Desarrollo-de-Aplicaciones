import React, { useState } from 'react';
import '../estilos/Comentario.css'; 

const Comentario = () => {
  const [comment, setComment] = useState('');

  const controlarInput = (e) => {
    setComment(e.target.value);
  };

  const controlarEnviar = (e) => {
    e.preventDefault();
    console.log("Comentario enviado:", comment);
    setComment('');
  };

  return (
    <div className="comentarioContenedor">
      <h2>Deja tu comentario</h2>
      <form onSubmit={controlarEnviar}>
        <textarea
          value={comment}
          onChange={controlarInput}
          placeholder="Escribe tu comentario aquí..."
          required
        />
        <button type="submit">Enviar Comentario</button>
      </form>
    </div>
  );
};

export default Comentario;
