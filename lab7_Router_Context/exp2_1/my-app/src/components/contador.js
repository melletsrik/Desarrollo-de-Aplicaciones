import './contador.css'
import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // Usar el valor pasado por props
  const [showCounter, setShowCounter] = useState(false); // Controla la visibilidad

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleCounter = () => setShowCounter(!showCounter); // Función para alternar visibilidad

  return (
    <div id='flex-container1'>
      <div id='flex-auto1' onClick={toggleCounter}><h1>Añade un aplauso</h1></div>
      {showCounter && ( // Mostrar u ocultar el contador
        <div id='default1'>
          <h2>Maquina contadora de aplausos: {count}</h2>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </div>
      )}
    </div>
  );
};

export default Counter;