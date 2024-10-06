import React, { useState } from "react";

export default function ContadorLikes() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    console.log(ContadorLikes)
    setContador(contador + 1);
  };

  return (
    <div>        
      <label>Contador: {contador}</label><br/>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
