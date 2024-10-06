import { useState, useEffect } from "react";

const EffectComp = () => {
  const [contador, setContador] = useState(0);

  useEffect (()=>{
    document.title = contador;
  })

  return (
    <div>
      <label>Likes {contador}</label>
      <br />
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default EffectComp;
