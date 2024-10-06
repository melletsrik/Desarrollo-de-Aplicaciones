// Counter.js
import React, { useState } from 'react';
const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // Usar el valor pasado por props

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
